async function deleteClient(email, ClientRepository) {
    if (!email) {
        return {
            errorMessage: "El Email es necesario para eliminar un cliente",
            success: false
        }
    }
    return await ClientRepository.delete(email);
}

module.exports = { deleteClient };