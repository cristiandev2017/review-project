const { createClient } = require('../../application/use-cases/client/register-client')
const {
  ClientRepositoryMongo
} = require('../../infrastructure/repositories/client-repository');

async function registerClient(req, res) {
  try {
    const { fullName, photoURL, email, phoneNumber, birthday } = req.body;
    const client = await createClient(fullName, photoURL, email, phoneNumber, birthday, ClientRepositoryMongo.prototype);
    res.json(client);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { registerClient };
