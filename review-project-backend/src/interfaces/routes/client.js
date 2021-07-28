const router = require('express').Router();
const { RegisterClient, DeleteClient } = require('../controller/client-controller');

router.post('/register-client', RegisterClient);
router.delete('/delete-client', DeleteClient);

module.exports = router;
