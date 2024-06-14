const express = require('express');
const router = express.Router();
const timerController = require('../controllers/timerController');

router.get('/timers', timerController.getTimers);
router.post('/timers', timerController.createTimer);
router.delete('/timers/:id', timerController.deleteTimer);

module.exports = router;
