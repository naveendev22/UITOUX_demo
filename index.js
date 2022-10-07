const express = require("express");
const body_parser = require("body-parser");
const router = require("./src/router/index.js");
const { Mongoose } = require("mongoose");

cors = require("cors");
const app = express();
const port = 4000;
const mongooseconnection = require("./database/mongo.database");
mongooseconnection;

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.use(
  cors({
    origin: "*",
  })
);
app.use("/api", router);

app.listen(port, () => {
  console.log(`servers started ${port}`);
});
