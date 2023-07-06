const express = require("express");

const dataRoute = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const {
  uploadFileToDataBase,
} = require("../controller/uploadFileToDataBase.Route.Controller");

// Setup Uploading

const storage = multer.diskStorage({
  //Where we upload the file
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },

  //get the file Name
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

dataRoute.post("/uploadFile", uploads.single("file"), uploadFileToDataBase);

module.exports = dataRoute;
