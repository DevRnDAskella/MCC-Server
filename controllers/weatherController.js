const { getData } = require("../services/api");
const { Metar } = require("../models");

exports.getMetar = async (req, res) => {
  const { icaoCode } = req.params;
  const response = await getWeather(icaoCode);

  res.send(response.data);
};

exports.getWeather = async (req, res) => {
  const { data, isTaf } = req.query;
  const resData = {};
  const options = Boolean(Number(isTaf));
  if (options) {
    const responseTaf = await getData(data, options);
    resData.taf = responseTaf.data.data;
  }
  const responseMetar = await getData(data);
  resData.metar = responseMetar.data.data;

  res.json(resData);
};

exports.saveMetar = async (req, res) => {
  const { icaoCode } = req.params;
  const response = await getWeather(icaoCode);

  const answer = await Metar.create({ rawData: response.data.data[0] });

  res.send(201, answer);
};
