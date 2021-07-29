const router = require('express').Router();
const { CreateEmployee, UpdateEmployeeServices, DeleteEmployee, GetAllEmployees, GetEmployeeByEmail } = require('../controller/employee-controller');

router.post('/create-employee', CreateEmployee);
router.patch('/update-employee', UpdateEmployeeServices);
router.delete('/delete-employee', DeleteEmployee);
router.get('/get-employees', GetAllEmployees);
router.get('/get-employee-by-email', GetEmployeeByEmail);

module.exports = router;