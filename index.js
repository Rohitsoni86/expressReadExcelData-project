console.log("Start !!");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const dataRoute = require("./routes/RouteHandler");
const path = require("path");
//Body Parser

app.use(bodyParser.json());
//fetch data from the request
app.use(bodyParser.urlencoded({ extended: false }));
//Making static folder
app.use(express.static(path.resolve(__dirname, "public")));

app.use(cors());

const greetUser = (req, res, next) => {
  res.status(200).send("Welcome To Your Application !!!");
};

mongoose
  .connect("mongodb://127.0.0.1:27017/ReadingExcelData")
  .then(() => console.log("Connected To DB!"))
  .catch((err) => {
    console.log(err);
    console.log("Error Connecting To DB !!");
  });

app.get("/", greetUser);

app.use(dataRoute);

// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Started !! ${port}`);
});
