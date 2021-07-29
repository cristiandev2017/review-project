const { scheduleDate } = require('../../application/use-cases/appointment/schedule-appointment');
const { AppointmentRepositoryMongo } = require('../../infrastructure/repositories/appointment-repository');

async function ScheduleAppointment(req, res) {
    try {
        const { date, serviceID, serviceValue } = req.body;
        const appointment = await scheduleDate(date, serviceID, serviceValue, AppointmentRepositoryMongo.prototype);
        res.json(appointment);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { ScheduleAppointment };