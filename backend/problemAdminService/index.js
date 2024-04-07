//importing builtin packages
const express = require("express");

//importing middleawares
const bodyParser = require("body-parser");
const apiRouter = require("./routes");

//importing custom packages
const { PORT } = require("./config/serverConfig");

const errorHandler = require("./utils/errorHandler");
const { connectToDatabase } = require("./config/dbDriver");


const app = express();

//initializing middlewares

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());


//connecting to db
app.listen(PORT, async (req, res, next) => {
  await connectToDatabase();
});


//enabling routing
app.use("/api", apiRouter);

//dummy pin request to chk wheter routiing is working properly or not,
app.get("/ping", (req, res) => {
  return res.json({
    msg: "pong",
  });
});


//custom error middleware
app.use(errorHandler);
