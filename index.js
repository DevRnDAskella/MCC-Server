// ======== LIB ========
const app = require("express")();
const mongoose = require("mongoose");
require("dotenv").config();

// ======== INNER IMPORTS ========

const { weatherRouter } = require("./routes");

// ========  CONFIGURATION ========

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err.message);
  }
});

// ========  ROUTES ========

app.use(weatherRouter);
