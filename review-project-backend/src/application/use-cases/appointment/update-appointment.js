const Appointment = require('../../../domain/appointment/Appointment');

async function rescheduleDate(id, date, AppointmentRepository) {
    if (!date) {
        return {
            errorMessage: 'No se puede actualizar una cita sin una fecha',
            success: false
        }
    }
    const { _id, serviceID, serviceValue } = await AppointmentRepository.findById(id);
    if (!_id) {
        return {
            errorMessage: "La cita que intenta reprogramar no existe",
            success: false
        };
    }
    const appointment = new Appointment(date, serviceID, serviceValue);
    console.log("esto es lo que se va a guardar", appointment);
    return await AppointmentRepository.update(_id, appointment);
}

module.exports = { rescheduleDate };