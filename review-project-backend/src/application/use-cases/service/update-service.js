const Service = require('../../../domain/service/Service');

async function updateServiceValue(name, value, ServiceRepository) {
    if (!name) {
        return {
            errorMessage: "Se necesita el nombre del servicio para cambiar su valor",
            success: false
        }
    }
    const { _id, description, employeeID } = await ServiceRepository.findByName(name);
    if (!_id) {
        return {
            errorMessage: "El servicio al que le intenta modificar el precio no existe",
            success: false
        }
    }
    const service = new Service(name, description, value, employeeID);
    return await ServiceRepository.update(_id, service);
}

module.exports = { updateServiceValue };