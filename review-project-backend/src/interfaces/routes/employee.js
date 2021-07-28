const router = require('express').Router();
const { CreateEmployee } = require('../controller/employee-controller');

router.post('/create-employee', CreateEmployee);

module.exports = router;