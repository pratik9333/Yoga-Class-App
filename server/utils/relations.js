const User = require("../models/user");
const Payment = require("../models/payment");
const Batch = require("../models/batch");

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
