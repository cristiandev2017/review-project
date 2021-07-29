async function getAllAppointments(AppointmentRepository) {
    return await AppointmentRepository.findAll();
}

async function getAppointmentById(id, AppointmentRepository) {
    if (!id) {
        return {
            errorMessage: 'No hay ID para buscar en la BD',
            success: false
        }
    }
    return AppointmentRepository.findById(id);
}

module.exports = { getAllAppointments, getAppointmentById };