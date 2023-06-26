const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

const app = require("./app");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err);

    process.exit(1);
  });
