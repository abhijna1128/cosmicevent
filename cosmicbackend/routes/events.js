const express = require('express');
const { getAllEvents, addEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const router = express.Router();

// Define endpoints
router.get('/', getAllEvents);
router.post('/', addEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
