const router = require('express').Router();
const { PlaceOrder } = require('../controller/order-controller');

router.post('/place-order', PlaceOrder);


module.exports = router;