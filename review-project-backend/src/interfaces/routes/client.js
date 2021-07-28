const router = require('express').Router();
const { RegisterClient, DeleteClient, GetClientByEmail, GetAllClients } = require('../controller/client-controller');

router.post('/register-client', RegisterClient);
router.delete('/delete-client', DeleteClient);
router.get('/get-by-email', GetClientByEmail);
router.get('/get-clients', GetAllClients);

module.exports = router;
