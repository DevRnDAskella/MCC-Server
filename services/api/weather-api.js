const axios = require("axios");
const instance = axios.create({
  baseURL: "https://api.checkwx.com/",
  headers: { "X-API-Key": process.env.WEATHER_API_KEY },
});

exports.getData = (subURL, extended) => {
  if (extended) {
    return instance.get(`taf/${subURL}`);
  }
  return instance.get(`metar/${subURL}`);
};