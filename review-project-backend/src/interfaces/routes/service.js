const router = require('express').Router();
const { CreateService, GetAllServices, GetServiceByName, DeleteService, UpdateServiceValue, GetServiceById } = require('../controller/service-controller');

router.post('/create-service', CreateService);
router.put('/update-service-value', UpdateServiceValue);
router.get('/get-services', GetAllServices);
router.get('/get-service-by-name', GetServiceByName);
router.get('/get-service-by-id', GetServiceById);
router.delete('/delete-service', DeleteService);

module.exports = router;
