const Service = require('../../../domain/service/Service');

async function createService(name, description, value, employeeID, ServiceRepository) {
    if (!name) {
        return {
            errorMessage: 'Se requiere un nombre para crear un servicio',
            success: false
        }
    }
    const serviceExist = await ServiceRepository.findByName(name);
    if (serviceExist) {
        return {
            errorMessage: "Ya existe un servicio con este nombre",
            success: false
        };
    }
    const service = new Service(name, description, value, employeeID);
    return await ServiceRepository.save(service);
}

module.exports = { createService };