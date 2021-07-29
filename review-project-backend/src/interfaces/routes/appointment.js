const router = require('express').Router();
const { ScheduleAppointment } = require('../controller/appointment-controller');

router.post('/schedule-appointment', ScheduleAppointment);

module.exports = router;