const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/destinations', apiController.getDestinations);
router.get('/trips', apiController.getTrips);
router.post('/trips', apiController.createTrip);
router.get('/weather/:city', apiController.getWeather);

module.exports = router;