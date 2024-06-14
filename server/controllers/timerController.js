const Timer = require('../models/timer');

// Get all timers
const getTimers = async (req, res) => {
  try {
    const timers = await Timer.find();
    res.json(timers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new timer
const createTimer = async (req, res) => {
  const timer = new Timer(req.body);
  try {
    const savedTimer = await timer.save();
    res.status(201).json(savedTimer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a timer by ID
const deleteTimer = async (req, res) => {
  try {
    const timer = await Timer.findByIdAndDelete(req.params.id);
    if (timer) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Timer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTimers,
  createTimer,
  deleteTimer,
};
