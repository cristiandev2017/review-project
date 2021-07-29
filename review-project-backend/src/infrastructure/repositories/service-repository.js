const Service = require('../../domain/service/Service');
const ServiceSchema = require('../database/mongo/schemas/Service');
const ServiceRepository = require('../../domain/service/Service');

class ServiceRepositoryMongo extends ServiceRepository {
    constructor() {
        super();
    }
    async save(service) {
        const { name, description, value, employeeID } = service;
        const mongoService = new ServiceSchema({ name, description, value, employeeID });
        await mongoService.save();
        return new Service(
            mongoService.name,
            mongoService.description,
            mongoService.value,
            mongoService.employeeID
        );
    }

    async update(id, service) {
        return await ServiceSchema.findByIdAndUpdate(id, service, { new: true });
    }

    async delete(name) {
        return await ServiceSchema.deleteOne({ name: name });
    }

    async findByName(name) {
        return await ServiceSchema.findOne({ name: name });
    }

    async findAll() {
        return await ServiceSchema.find({});
    }
}

module.exports = { ServiceRepositoryMongo }