const Appointment = require('../../../domain/appointment/Appointment');

async function scheduleDate(date, serviceID, serviceValue, AppointmentRepository) {
    if (!date) {
        return {
            errorMessage: 'Es necesario ingresar una fecha para agendar una cita',
            success: false
        }
    }
    const appointment = new Appointment(date, serviceID, serviceValue);
    const response = await AppointmentRepository.save(appointment);
    return response;
}

module.exports = { scheduleDate }