const Payment = require("../../Models/payment");
const User = require("../../models/user");

exports.handlePayment = async (req, res) => {
  // payment logic
  // ..........

  try {
    // saving payment info in DB
    const user = await User.findByPk(req.params.userid);

    const createdPayment = await Payment.create({
      batchID: user.batchId,
      amountPaid: 500,
      paymentMode: "credit/debit",
      transactionNumber: "284849292",
      paymentDate: Date.now(),
    });

    await user.addPayment(createdPayment.id);

    return res.status(200).json({
      success: true,
      paymentReceipt: createdPayment,
      message: "Payment completed!",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Payment failed!",
    });
  }
};
