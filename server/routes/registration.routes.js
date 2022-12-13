const router = require("express").Router();

//controllers
const {
  registerUser,
  addBatch,
} = require("../services/registration/registration.service.js");

// middlewares
const {
  checkValidations,
} = require("../middlewares/Registration/checkValidations.middleware.js");

//accepting users registration form
router.route("/").post(checkValidations, registerUser);

// adding batch
router.route("/batch").post(addBatch);

module.exports = router;
