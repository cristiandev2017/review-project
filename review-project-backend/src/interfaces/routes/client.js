const router = require('express').Router();
const { RegisterClient } = require('../controller/client-controller');

router.post('/register-client', RgegisterClient);

module.exports = router;
