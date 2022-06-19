const { model, Schema } = require("mongoose");

const efbSchema = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = model("efbs", efbSchema);
