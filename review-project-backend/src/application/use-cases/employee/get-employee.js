async function getEmployeeByEmail(email, EmployeeRepository) {
    if (!email) {
        return {
            errorMessage: "El email es necesario",
            success: false
        }
    }
    return await EmployeeRepository.findByEmail(email);
}

async function getAllEmployees(EmployeeRepository) {
    return await EmployeeRepository.findAll();
}

module.exports = { getEmployeeByEmail, getAllEmployees };