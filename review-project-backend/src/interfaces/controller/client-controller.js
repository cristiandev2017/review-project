const { createClient } = require('../../application/use-cases/client/register-client');
const { deleteClient } = require('../../application/use-cases/client/delete-client');
const { getClientByEmail, getAllClients } = require('../../application/use-cases/client/get-client');
const {
  ClientRepositoryMongo
} = require('../../infrastructure/repositories/client-repository');

async function RegisterClient(req, res) {
  try {
    const { fullName, photoURL, email, phoneNumber, birthday } = req.body;
    const client = await createClient(fullName, photoURL, email, phoneNumber, birthday, ClientRepositoryMongo.prototype);
    res.json(client);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function DeleteClient(req, res) {
  try {
    const { email } = req.body;
    res.json(await deleteClient(email, ClientRepositoryMongo.prototype));
  } catch (error) {
    res.status(500).send(error);
  }
}

async function GetClientByEmail(req, res) {
  try {
    const { email } = req.body;
    res.json(await getClientByEmail(email, ClientRepositoryMongo.prototype));
  } catch (error) {
    res.status(500).send(error);
  }
}

async function GetAllClients(req, res) {
  try {
    res.json(await getAllClients(ClientRepositoryMongo.prototype));
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { RegisterClient, DeleteClient, GetClientByEmail, GetAllClients };
