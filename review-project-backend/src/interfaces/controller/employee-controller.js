const { createEmployee } = require('../../application/use-cases/employee/create-employee');
const {
    EmployeeRepositoryMongo
} = require('../../infrastructure/repositories/employee-repository');

async function CreateEmployee(req, res) {
    try {
        const { fullName, photoURL, email, services } = req.body;
        console.log("esto esta llegando en el body: ", req.body);
        const employee = await createEmployee(fullName, photoURL, email, services, EmployeeRepositoryMongo.prototype);
        res.json(employee);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = { CreateEmployee };