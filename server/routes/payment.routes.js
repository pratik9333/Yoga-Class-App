const router = require("express").Router();

//controllers
const { handlePayment } = require("../services/payment/payment.service.js");

// payment route
router.route("/:userid").post(handlePayment);

module.exports = router;
