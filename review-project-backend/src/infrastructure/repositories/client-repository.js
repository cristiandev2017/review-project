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
    console.log("entra al findByEmail")
    return ClientSchema.findOne({ email: email });
  }
}
module.exports = { ClientRepositoryMongo };
