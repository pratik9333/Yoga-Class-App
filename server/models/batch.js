const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Batch = sequelize.define(
  "batch",
  {
    batchName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    startTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    endTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

// exporting User model
module.exports = Batch;
