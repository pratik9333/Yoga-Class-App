const router = require("express").Router();

const {
  checkValidations,
  completePayment,
  registerUser,
} = require("../services/registration/registration.js");

//accepting users registration form
router.route("/", checkValidations, completePayment, registerUser);

module.exports = router;
