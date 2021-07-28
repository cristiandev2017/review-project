const router = require('express').Router();
const { registerClient } = require('../controller/client-controller');

router.post('/register-user', registerClient);

module.exports = router;
