const express = require('express');
const router = express.Router();
const timetableController = require('./controllers');

router.get('/', timetableController.getAllTimetables);
router.get('/:id', timetableController.getTimetableById);
router.post('/', timetableController.createTimetable);
router.put('/:id', timetableController.updateTimetable);
router.delete('/:id', timetableController.deleteTimetable);

module.exports = router;
