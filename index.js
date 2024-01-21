require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const { serverPort } = require("./src/config/environment");
const masterRouter = require("./src/routers");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("dev"));
app.use(cors(
  {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }
));

app.use(masterRouter);

app.listen(serverPort, () => {
  console.log("App listening to port : " + serverPort);
});

module.exports = app;
