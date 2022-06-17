const { model, Schema } = require("mongoose");

const aircraftModificationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Schema.Types.ObjectId,
  },
  weightLimits: {
    feulTank: {
      type: Number,
    },
    MLW: {
      type: Number,
    },
    MTOW: {
      type: Number,
    },
    MTW: {
      type: Number,
    }, // === MRW
    MZFW: {
      type: Number,
    },
  },
});

const AircraftModification = model(
  "aircraft_modifications",
  aircraftModificationSchema
);

module.exports = AircraftModification;
