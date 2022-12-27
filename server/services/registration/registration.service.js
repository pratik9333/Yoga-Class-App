const User = require("../../models/user");
const Batch = require("../../models/batch");

const { Op } = require("sequelize");

exports.registerUser = async (req, res) => {
  try {
    let user;
    // registering batch
    const getBatch = await Batch.findOne({
      where: { batchName: req.body.batch },
    });

    if (!getBatch) {
      return res
        .status(400)
        .json({ success: false, message: "Batch does not exists" });
    }

    if (req.body.newUser) {
      //

      const createdUser = await User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        batch: req.body.batch,
        age: req.body.age,
        gender: req.body.gender,
      });
      await getBatch.addUser(createdUser);
      user = createdUser;

      //
    } else {
      //
      user = req.body.existingUser;
      await getBatch.addUser(req.body.existingUser);

      //
    }

    // setting user batchID
    user.batchId = getBatch.id;

    return res.status(200).json({
      user,
      success: true,
      message: "User registered!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User failed to register, please try again",
    });
  }
};

exports.addBatch = async (req, res) => {
  try {
    const { batchName, startTime, endTime } = req.body;

    if (startTime === endTime) {
      return res.status(400).json({
        success: false,
        message: "startTime is same as endTime",
      });
    }

    // checking current batch name with existing batches names
    const getExistingBatchByName = await Batch.findOne({
      where: { batchName },
    });

    if (getExistingBatchByName) {
      return res
        .status(400)
        .json({ success: false, message: "Batch name already exists" });
    }

    // checking current batch starttime with existing batches starttime
    const getExistingBatchByTime = await Batch.findOne({
      where: {
        [Op.or]: [{ startTime: startTime }],
      },
    });

    if (getExistingBatchByTime) {
      return res.status(400).json({
        success: false,
        message:
          "Two simultaneous batches cannot have same starting time, please change your timings",
      });
    }

    await Batch.create(req.body);

    return res.status(200).json({
      success: true,
      message: "New batch is added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Batch failed to create, server error",
    });
  }
};
