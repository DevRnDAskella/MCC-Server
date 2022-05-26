// ======== LIB ========
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// ======== INNER IMPORTS ========

const { weatherRouter } = require("./routes");

// ========  CONFIGURATION ========
const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetction Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err.message);
  }
});

// ========  ROUTES ========

app.use(weatherRouter);
