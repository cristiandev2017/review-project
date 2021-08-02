async function getAllServices(ServiceRepository) {
    return ServiceRepository.findAll();
}

async function getServiceByName(name, ServiceRepository) {
    if (!name) {
        return {
            errorMessage: 'Necesito el nombre para buscar en la BD',
            success: false
        }
    }
    return ServiceRepository.findByName(name);
}

async function getServiceById(id, ServiceRepository) {
    if (!id) {
        return {
            errorMessage: 'Necesita el id para buscar en la BD',
            success: false
        }
    }
    return ServiceRepository.findById(id);
}

module.exports = { getAllServices, getServiceByName, getServiceById };