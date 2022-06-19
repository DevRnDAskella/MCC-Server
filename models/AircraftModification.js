const { model, Schema } = require("mongoose");

const aircraftModificationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: "aircraft_types",
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

module.exports = model("aircraft_modifications", aircraftModificationSchema);
