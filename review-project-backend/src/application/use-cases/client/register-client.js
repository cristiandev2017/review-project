const Client = require('../../../domain/client/Client');

async function createClient(fullName, photoURL, email, phoneNumber, birthday, ClientRepository) {
    if (!email) {
        return {
            errorMessage: "Es necesario un email para crear un cliente",
            success: false
        };
    }
    const client = new Client(fullName, photoURL, email, phoneNumber, birthday);
    const response = await ClientRepository.save(client);
    return response;
}

module.exports = { createClient };
