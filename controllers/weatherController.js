const { getWeather } = require("../services/api");
const { Metar } = require("../models");

exports.getMetar = async (req, res) => {
  const { icaoCode } = req.params;
  const response = await getWeather(icaoCode);

  res.send(response.data);
};

exports.getWeather = async (req, res) => {
  const { data } = req.query;
  const response = await getWeather(data);

  res.json(response.data.data);
};

exports.saveMetar = async (req, res) => {
  const { icaoCode } = req.params;
  const response = await getWeather(icaoCode);

  const answer = await Metar.create({ rawData: response.data.data[0] });

  res.send(201, answer);
};
