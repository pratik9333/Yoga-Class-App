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
      type: DataTypes.TIME,
      allowNull: false,
    },

    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  { timestamps: true }
);

// exporting User model
module.exports = Batch;
