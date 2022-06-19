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

module.exports = model("weather", weatherSchema);
