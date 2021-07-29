const Client = require('../../domain/client/Client');
const ClientSchema = require('../database/mongo/schemas/Client');
const ClientRepository = require('../../domain/client/ClientRepository');

class ClientRepositoryMongo extends ClientRepository {

  constructor() {
    super();
  }

  async save(client) {
    const { fullName, photoURL, email, phoneNumber, birthday } = client;
    const mongoClient = new ClientSchema({ fullName, photoURL, email, phoneNumber, birthday });
    await mongoClient.save();
    return new Client(
      mongoClient.fullName,
      mongoClient.photoURL,
      mongoClient.email,
      mongoClient.phoneNumber,
      mongoClient.birthday,
    );
  }

  async findByEmail(email) {
    return await ClientSchema.findOne({ email: email });
  }

  async delete(email) {
    return await ClientSchema.deleteOne({ email: email });
  }

  async findAll() {
    return await ClientSchema.find({});
  }
}
module.exports = { ClientRepositoryMongo };
