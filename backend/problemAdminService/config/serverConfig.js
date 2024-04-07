const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DB_PRODUCTION_URL: process.env.DB_PRODUCTION_URL,
  NODE_ENV: process.env.NODE_ENV,
};
