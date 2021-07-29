async function deleteService(name, ServiceRepository) {
    if (!name) {
        return {
            errorMessage: "El nombre es necesario para eliminar un servicio",
            success: false
        }
    }
    return await ServiceRepository.delete(name);
}

module.exports = { deleteService };