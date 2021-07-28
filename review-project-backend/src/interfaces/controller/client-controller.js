const Client = require('../../domain/client/Client');
const {
  ClientRepositoryMongo,
} = require('../../infrastructure/repositories/client-repository');

async function registerClient(req, res) {
  try {
    const { email, phoneNumber, birthday } = req.body;
    const client = new Client(
      email,
      phoneNumber,
      birthday,
      ClientRepositoryMongo.prototype,
    );
    res.json(client);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { registerClient };
