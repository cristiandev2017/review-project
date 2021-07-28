const Client = require('../../domain/client/Client');
const ClientSchema = require('../database/mongo/schemas/Client');
const ClientRepository = require('../../domain/client/ClientRepository');

class ClientRepositoryMongo extends ClientRepository {
  constructor() {
    super();
  }

  async save(client) {
    const { email, phoneNumber, birthday } = client;
    const mongoClient = new ClientSchema({ email, phoneNumber, birthday });
    await mongoClient.save();
    return new Client(
      mongoClient._id,
      mongoClient.email,
      mongoClient.phoneNumber,
      mongoClient.birthday,
    );
  }
}
module.exports = { ClientRepositoryMongo };
