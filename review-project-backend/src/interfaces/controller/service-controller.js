const { createService } = require('../../application/use-cases/service/create-service');
const { getAllServices, getServiceByName, getServiceById } = require('../../application/use-cases/service/get-service');
const { deleteService } = require('../../application/use-cases/service/delete-service');
const { updateServiceValue } = require('../../application/use-cases/service/update-service');
const { ServiceRepositoryMongo } = require('../../infrastructure/repositories/service-repository');

async function CreateService(req, res) {
    try {
        const { name, description, value, employeeID } = req.body;
        res.json(await createService(name, description, value, employeeID, ServiceRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function GetAllServices(req, res) {
    try {
        res.json(await getAllServices(ServiceRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function GetServiceByName(req, res) {
    try {
        const { name } = req.body;
        res.json(await getServiceByName(name, ServiceRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function GetServiceById(req, res) {
    try {
        const { id } = req.query;
        res.json(await getServiceById(id, ServiceRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function DeleteService(req, res) {
    try {
        const { name } = req.body;
        res.json(await deleteService(name, ServiceRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function UpdateServiceValue(req, res) {
    try {
        const { name, value } = req.body;
        res.json(await updateServiceValue(name, value, ServiceRepositoryMongo.prototype))
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { CreateService, GetAllServices, GetServiceByName, DeleteService, UpdateServiceValue, GetServiceById };