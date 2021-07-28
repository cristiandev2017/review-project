const Employee = require('../../../domain/employee/Employee');

async function createEmployee(fullName, photoURL, email, services, EmployeeRepository) {
    if (!email) {
        return {
            errorMessage: "Es necesario un email para crear un empleado",
            success: false
        };
    }
    /*const employeeExist = await EmployeeRepository.findByEmail(email);
    if (employeeExist) {
        return employeeExist;
    }*/
    const employee = new Employee(fullName, photoURL, email, services);
    return await EmployeeRepository.save(employee);

}

module.exports = { createEmployee };