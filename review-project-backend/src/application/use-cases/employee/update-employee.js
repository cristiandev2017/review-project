const Employee = require('../../../domain/employee/Employee');

async function updateEmployeeServices(email, services, EmployeeRepository) {
    if (!email) {
        return {
            errorMessage: "Es necesario un email para editar un empleado",
            success: false
        };
    }
    const { _id, fullName, photoURL } = await EmployeeRepository.findByEmail(email);
    if (!fullName) {
        return {
            errorMessage: "El empleado que intenta editar no existe",
            success: false
        };
    }
    const employee = new Employee(fullName, photoURL, email, services);
    return await EmployeeRepository.updateEmployeeServices(_id, employee);
}

module.exports = { updateEmployeeServices };