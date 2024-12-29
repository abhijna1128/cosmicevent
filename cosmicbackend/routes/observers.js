const express = require('express');
const { getAllObservers, addObserver } = require('../controllers/observerController');
const router = express.Router();

// Define endpoints
router.get('/', getAllObservers);
router.post('/', addObserver);

module.exports = router;
