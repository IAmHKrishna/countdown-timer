const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const timerRoutes = require('./routes/timerRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', timerRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.j8zhwnr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

module.exports = app;
