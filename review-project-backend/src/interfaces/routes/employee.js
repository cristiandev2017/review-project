const router = require('express').Router();
const { CreateEmployee, GetAllEmployees, GetEmployeeByEmail } = require('../controller/employee-controller');

router.post('/create-employee', CreateEmployee);
router.get('/get-employees', GetAllEmployees);
router.get('/get-employee-by-email', GetEmployeeByEmail);


module.exports = router;