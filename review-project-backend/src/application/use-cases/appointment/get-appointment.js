async function getAllAppointments(AppointmentRepository) {
    return await AppointmentRepository.findAll();
}

async function getAppointmentById(id, AppointmentRepository) {
    if (!id) {
        return {
            errorMessage: 'Necesito el ID de la cita que se va a actualizar',
            success: false
        }
    }
    return AppointmentRepository.findById(id);
}

module.exports = { getAllAppointments, getAppointmentById };