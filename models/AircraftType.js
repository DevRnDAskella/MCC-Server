const { model, Schema } = require("mongoose");

const AircraftTypeSchema = new Schema({
  name: {
    icao: String, // SU95
    local: String, // RRJ95
    common: String, // Sukhoi Superjet 100
  },
  modifications: [
    { type: Schema.Types.ObjectId, ref: "aircraft_modifications" },
  ],
});

module.exports = model("aircraft_types", AircraftTypeSchema);
