async function cancelDate(id, AppointmentRepository) {
    if (!id) {
        return {
            errorMessage: 'Es necesario un ID para cancelar una cita',
            success: false
        }
    }
    return await AppointmentRepository.delete(id);
}

module.exports = { cancelDate };