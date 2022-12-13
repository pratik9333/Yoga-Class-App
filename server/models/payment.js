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
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: false,
    createdAt: "paymentDate",
  }
);

// exporting User model
module.exports = Payment;
