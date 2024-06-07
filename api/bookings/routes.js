const express = require('express');
const router = express.Router();
const bookingController = require('./controllers');

router.get('/', bookingController.getAllbookings);
router.get('/:id', bookingController.getbookingById);
router.post('/', bookingController.createbooking);
router.put('/:id', bookingController.updatebooking);
router.delete('/:id', bookingController.deletebooking);




module.exports = router;