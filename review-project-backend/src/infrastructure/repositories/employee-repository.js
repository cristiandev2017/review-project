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
        await mongoEmployee.save();
        return new Employee(mongoEmployee.fullName, mongoEmployee.photoURL, mongoEmployee.email, mongoEmployee.services);
    }

    async updateEmployeeServices(id, employee) {
        return EmployeeSchema.findByIdAndUpdate(id, employee, { new: true })
    }

    async findByEmail(email) {
        return EmployeeSchema.findOne({ email: email });
    }

    async delete(email) {
        return EmployeeSchema.deleteOne({ email: email });
    }

    async findAll() {
        return EmployeeSchema.find({});
    }
}

module.exports = { EmployeeRepositoryMongo };