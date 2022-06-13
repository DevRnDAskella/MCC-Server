const { model, Schema } = require("mongoose");

const contactSchema = new Schema({});

const Contact = model("contacts", contactSchema);

module.exports = Contact;
