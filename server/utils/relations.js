const User = require("../models/user.model");
const Payment = require("../models/payment.model");
const Batch = require("../models/batch.model");

exports.Relations = () => {
  //

  // 1:M Batch and Users
  Batch.hasMany(User);
  User.belongsTo(Batch);

  // 1:M User and Payment
  User.hasMany(Payment);
  Payment.belongsTo(User);

  //
};
