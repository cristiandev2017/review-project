const router = require('express').Router();
const { ScheduleAppointment, GetAllAppointments, GetAppointmentById } = require('../controller/appointment-controller');

router.post('/schedule-appointment', ScheduleAppointment);
router.get('/get-appointments', GetAllAppointments);
router.get('/get-appointment-by-id', GetAppointmentById);

module.exports = router;