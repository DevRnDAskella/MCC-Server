const weatherRouter = require("express").Router();
const { getMetar } = require("../controllers");

weatherRouter.get("/weather/:icaoCode", getMetar);

module.exports = weatherRouter;
