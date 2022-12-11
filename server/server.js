const cors = require("cors");
const express = require("express");
const app = express();

const sequelize = require("./config/db");

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// file middleware

// importing all routes here

// router middleware

// importing relations
require("./utils/relations").Relations();

const port = process.env.PORT || 80;

// syncing the models with the database and server running
sequelize
  .sync()
  .then((result) => {
    console.log(`Database connected successfully!`);
    app.listen(port, () => {
      console.log(`app is runnning at ${port}`);
    });
  })
  .catch((error) => console.error(error));
