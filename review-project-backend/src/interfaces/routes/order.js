const router = require('express').Router();
const { PlaceOrder, DeleteOrder, GetOrders, GetOrderByClientId } = require('../controller/order-controller');

router.post('/place-order', PlaceOrder);
router.delete('/delete-order', DeleteOrder);
router.get('/get-orders', GetOrders);
router.get('/get-orders-by-client', GetOrderByClientId);

module.exports = router;