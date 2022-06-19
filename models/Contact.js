const { model, Schema } = require("mongoose");

const contactSchema = new Schema({});

module.exports = model("contacts", contactSchema);
