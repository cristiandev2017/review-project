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

module.exports = { getAllServices, getServiceByName };