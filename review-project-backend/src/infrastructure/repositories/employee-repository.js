const Employee = require('../../domain/employee/Employee');
const EmployeeSchema = require('../database/mongo/schemas/Employee');
const EmployeeRepository = require('../../domain/employee/EmployeeRepository');

class EmployeeRepositoryMongo extends EmployeeRepository {
    constructor() {
        super();
    }

    async save(employee) {
        const { fullName, photoURL, email, services } = employee;
        const mongoEmployee = new EmployeeSchema({ fullName, photoURL, email, services });
        console.log("esto es mongoEmployee: ", mongoEmployee)
        await mongoEmployee.save();

        return new Employee(mongoEmployee.fullName, mongoEmployee.photoURL, mongoEmployee.email, mongoEmployee.services);
    }

    async findByEmail(email) {
        return ClientSchema.findOne({ email: email });
    }

    async delete(email) {
        return ClientSchema.deleteOne({ email: email });
    }

    async findAll() {
        return ClientSchema.find({});
    }
}

module.exports = { EmployeeRepositoryMongo };