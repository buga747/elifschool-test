const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

const { PORT = 3030, DB_URI } = process.env;

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log(`Database connected successfully: ${PORT}`);
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
