const { model, Schema } = require("mongoose");

const AircraftTypeSchema = new Schema({
  name: {
    icao: String, // SU95
    local: String, // RRJ95
    common: String, // Sukhoi Superjet 100
  },
  modifications: [Schema.Types.ObjectId],
});

const AircraftType = model("aircraft_types", AircraftTypeSchema);

module.exports = AircraftType;
