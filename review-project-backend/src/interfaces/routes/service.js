const router = require('express').Router();
const { CreateService, GetAllServices, GetServiceByName, DeleteService } = require('../controller/service-controller');

router.post('/create-service', CreateService);
router.get('/get-services', GetAllServices);
router.get('/get-service-by-name', GetServiceByName);
router.delete('/delete-service', DeleteService);

module.exports = router;
