const cors = require("cors");
const express = require("express");
const app = express();

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// home route
app.get("/", (req, res) => {
  res.send("<h1> Welcome to yoga class api! </h1>");
});

// importing all routes here
const registration = require("./routes/registration.routes");
const payment = require("./routes/payment.routes");

// router middleware
app.use("/register", registration);
app.use("/pay", payment);

module.exports = app;
