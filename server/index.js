require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/db");
const Batch = require("./models/batch");

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
