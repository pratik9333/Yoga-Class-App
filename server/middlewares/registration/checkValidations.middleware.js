const User = require("../../models/user");
const Payment = require("../../Models/payment");

exports.checkValidations = async (req, res, next) => {
  try {
    const { fullname, email, age, gender, batch } = req.body;

    console.log(req.body);

    if (!fullname || !email || !age || !gender || !batch) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    if (age < 18 || age > 65) {
      return res.status(400).json({
        success: false,
        message: "Min age required is 18 and Max age required is 65",
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      req.body.newUser = true;
      return next();
    }

    req.body.newUser = false;
    req.body.existingUser = user;

    //validating last payment date for existing users
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const checkLastPaymentDate = await Payment.findAll({
      limit: 1,
      where: { userId: user.id },
      order: [["paymentDate", "DESC"]],
    });

    if (checkLastPaymentDate?.length > 0) {
      const [paymentYear, paymentMonth] =
        checkLastPaymentDate[0].paymentDate.split("-");

      if (paymentYear == currentYear && paymentMonth == currentMonth) {
        return res.status(400).json({
          success: false,
          message: "User already has paid for this month!",
        });
      }
    }

    return next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again",
    });
  }
};
