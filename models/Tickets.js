const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketsSchema = new Schema({
  date: {type: Date, required: true},
  time: {type: String, required: true},
  department: {type: String, required: true},
  roomNumber: {type: Number, required: true},
  guestsLastName: {type: String, required: true},
  request: {type: String, required: true},
  comments: {type: String},
  status: {type: String, required: true}
});

const Tickets = mongoose.model("Tickets", ticketsSchema);

module.exports = Tickets;
