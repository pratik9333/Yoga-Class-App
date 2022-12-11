const cors = require("cors");
const express = require("express");
const app = express();

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//cookies and file middleware
app.use(cookieParser());

// importing all routes here

// router middleware
