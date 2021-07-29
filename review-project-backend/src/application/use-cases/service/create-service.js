const Service = require('../../../domain/service/Service');

async function createService(name, description, value, employeeID, ServiceRepository) {
    if (!name) {
        return {
            errorMessage: 'Se requiere un nombre para crear un servicio',
            success: false
        }
    }
    const serviceExists = await ServiceRepository.findByName(name);
    if (serviceExists) {
        return {
            errorMessage: 'El servicio que intenta crear ya existe',
            success: false
        }
    }
    const service = new Service(name, description, value, employeeID);
    return await ServiceRepository.save(service);
}

module.exports = { createService };