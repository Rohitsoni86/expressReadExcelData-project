Steps :

Step 1 – Create Node Express js App
Step 2 – Install Required Node Modules

"body-parser": "^1.20.2",
"convert-excel-to-json": "^1.7.0", // not working
"cors": "^2.8.5",
"express": "^4.18.2",
"mongoose": "^7.3.1",
"multer": "^1.4.5-lts.1",
"nodemon": "^2.0.22",
"read-excel-file": "^5.6.1" // this works best

Step 3 – Create Model

Create Models directory and inside this directory create userModel.js file; Then add following code into it:

Step 4 – Create Excel File Upload HTML Markup Form

for frontEnd

<!-- <!DOCTYPE html>
<html lang="en">
    <head>
      <title>Node js upload/Import excel file to Mongodb database - Tutsmake.com</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <h1>Node js upload Excel file to Mongodb database - Tutsmake.com</h1>
      <form action="/uploadfile" enctype="multipart/form-data" method="post">
        <input type="file" name="uploadfile" accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' >
        <input type="submit" value="Upload Excel">
      </form>
    </body>
</html> -->

Step 5 – Import Modules in App.js and other files

links::
https://www.bezkoder.com/node-js-upload-excel-file-database/

https://www.tutsmake.com/node-js-excel-import-to-mongodb-database/
