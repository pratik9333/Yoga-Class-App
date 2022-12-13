const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Payment = sequelize.define(
  "payment",
  {
    batchID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    amountPaid: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    paymentMode: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    transactionNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// exporting User model
module.exports = Payment;
