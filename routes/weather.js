const weatherRouter = require("express").Router();
const { getMetar, saveMetar, getWeather } = require("../controllers");

weatherRouter.get("/weather/:icaoCode", getMetar);
weatherRouter.get("/api/weather/", getWeather);
weatherRouter.post("/weather-save/:icaoCode", saveMetar);

module.exports = weatherRouter;
