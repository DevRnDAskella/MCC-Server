const { model, Schema } = require("mongoose");

const aerodromeSchema = new Schema({});

const Aerodrome = model("aerodromes", aerodromeSchema);

module.exports = Aerodrome;
