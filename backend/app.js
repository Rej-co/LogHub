const express = require('express');
const { dbconnect } = require("./config/db.config");
const mongoose = require('mongoose');
const cors = require('cors');

// import routers
const user = require("./router/user.router");

// create express object
const app = express();

// middlewares
app.use(express.json());

app.use(cors());

app.use("/user", user);


// create port
const port = 4000;


// listen to server
app.listen(4000, function () {
  console.log(`server started on port ${port}`);
});

// connect to database
dbconnect().then(function () {
  console.log("database connection successful");
});
