const weatherRouter = require("express").Router();
const { getMetar, saveMetar } = require("../controllers");

weatherRouter.get("/weather/:icaoCode", getMetar);
weatherRouter.post("/weather-save/:icaoCode", saveMetar);

module.exports = weatherRouter;
