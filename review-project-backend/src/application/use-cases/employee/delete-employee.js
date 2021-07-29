async function deleteEmployee(email, EmployeeRepository) {
    if (!email) {
        return {
            errorMessage: "El Email es necesario para eliminar un empleado",
            success: false
        }
    }
    return await EmployeeRepository.delete(email);
}

module.exports = { deleteEmployee };