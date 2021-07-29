const { createEmployee } = require('../../application/use-cases/employee/create-employee');
const { getEmployeeByEmail, getAllEmployees } = require('../../application/use-cases/employee/get-employee');
const { deleteEmployee } = require('../../application/use-cases/employee/delete-employee');
const { updateEmployeeServices } = require('../../application/use-cases/employee/update-employee');
const {
    EmployeeRepositoryMongo
} = require('../../infrastructure/repositories/employee-repository');

async function CreateEmployee(req, res) {
    try {
        const { fullName, photoURL, email, services } = req.body;
        const employee = await createEmployee(fullName, photoURL, email, services, EmployeeRepositoryMongo.prototype);
        res.json(employee);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function UpdateEmployeeServices(req, res) {
    try {
        const { email, services } = req.body;
        res.json(await updateEmployeeServices(email, services, EmployeeRepositoryMongo.prototype))
    } catch (error) {
        res.status(500).send(error);
    }
}

async function DeleteEmployee(req, res) {
    try {
        const { email } = req.body;
        res.json(await deleteEmployee(email, EmployeeRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function GetEmployeeByEmail(req, res) {
    try {
        const { email } = req.body;
        res.json(await getEmployeeByEmail(email, EmployeeRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function GetAllEmployees(req, res) {
    try {
        res.json(await getAllEmployees(EmployeeRepositoryMongo.prototype))
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { CreateEmployee, UpdateEmployeeServices, DeleteEmployee, GetAllEmployees, GetEmployeeByEmail };