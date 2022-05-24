const axios = require("axios");
const instance = axios.create({
  baseURL: "https://api.checkwx.com/",
  headers: { "X-API-Key": process.env.WEATHER_API_KEY },
});

exports.getWeather = (subURL, options = { typeRequest: "metar" }) => {
  const { typeRequest } = options;

  return instance.get(`${typeRequest}/${subURL}`);
};