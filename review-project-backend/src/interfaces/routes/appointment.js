const router = require('express').Router();
const { ScheduleAppointment, GetAllAppointments, GetAppointmentById, DeleteAppointment, UpdateAppointment } = require('../controller/appointment-controller');

router.post('/schedule-appointment', ScheduleAppointment);
router.delete('/cancel-appointment', DeleteAppointment);
router.put('/reschedule-appointment', UpdateAppointment);
router.get('/get-appointments', GetAllAppointments);
router.get('/get-appointment-by-id', GetAppointmentById);

module.exports = router;