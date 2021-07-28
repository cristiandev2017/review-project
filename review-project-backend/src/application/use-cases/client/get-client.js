async function getClientByEmail(email, ClientRepository) {
    if (!email) {
        return {
            errorMessage: "El email es necesario",
            success: false
        }
    }
    return await ClientRepository.findByEmail(email);
}

async function getAllClients(ClientRepository) {
    return await ClientRepository.findAll();
}

module.exports = { getClientByEmail, getAllClients };