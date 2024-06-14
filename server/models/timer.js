const mongoose = require('mongoose');

const timerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  deletionDate: { type: Date },
  duration: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
});

const Timer = mongoose.model('Timer', timerSchema);

module.exports = Timer;
