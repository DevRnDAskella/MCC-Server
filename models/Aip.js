const { model, Schema } = require("mongoose");

const aipSchema = new Schema({
  owner: {
    type: String,
    required: true,
    enum: ["CAIGA", "JEPPESEN"],
  },
  name: {
    number: {
      type: Number,
      default: null,
    },
    part: {
      type: Number,
      default: null,
    },
  },
});

module.exports = model("aips", aipSchema);
