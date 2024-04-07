const mongoose = require("mongoose");
const { DB_PRODUCTION_URL, NODE_ENV, PORT } = require("./serverConfig");
const InternalServerError = require("../errors/internalServerError");
const Problems = require("../models/problems.model");
async function connectToDatabase() {
  try {
    if (NODE_ENV == "production") {
      await mongoose.connect(DB_PRODUCTION_URL);
      console.log("connected to production database successfully");
      console.log(`server is listning at port ${PORT}`);
    }
  } catch (dbErr) {
    console.log("unable to connect to db due to->", dbErr);

    process.exit(1);
  }
}


module.exports = {
  connectToDatabase,
};
