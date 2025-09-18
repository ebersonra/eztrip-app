const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.get('/', tripController.index);
router.get('/search', tripController.search);
router.get('/plan', tripController.plan);
router.get('/:id', tripController.show);
router.post('/', tripController.create);

module.exports = router;