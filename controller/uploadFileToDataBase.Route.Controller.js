const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const UserModel = require("../model/userModel");
const excelToJson = require("convert-excel-to-json");
const readXlsxFile = require("read-excel-file/node");

const readF = async (pathF) => {
  let data = [];
  await readXlsxFile(pathF).then((rows) => {
    console.log("outer", rows);
    // skip header
    rows.shift();

    rows.forEach((row) => {
      console.log(row);
      let dataR = {
        Name: row[1],
        Email: row[2],
        Password: row[3],
      };
      data.push(dataR);
    });

    console.log("Inside", data);
  });
  return data;
};

const uploadFileToDataBase = async (req, res, next) => {
  console.log("Requested Upload File !!!");

  try {
    let path = __dirname + "/../public/uploads/" + req.file.filename;
    let response = await readF(path);
    console.log("Response", response);

    // now Insert To DataBase
    const uploadD = await UserModel.insertMany(response);
    console.log(uploadD);
    res.status(200).send("Users Data Added Successfully !!!");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

module.exports = { uploadFileToDataBase };
