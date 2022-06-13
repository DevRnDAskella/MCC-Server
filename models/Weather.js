const { model, Schema } = require("mongoose");

const weatherSchema = new Schema({
  metar: {
    type: String,
    required: true,
  },
  taf: {
    type: String,
  },
  timeCreated: {
    type: Date,
    default: Date.now(),
  },
});

const Weather = model("weather", weatherSchema);

module.exports = Weather;
