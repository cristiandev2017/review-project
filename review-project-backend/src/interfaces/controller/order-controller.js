const { placeOrder } = require('../../application/use-cases/order/create-order');
const { OrderRepositoryMongo } = require('../../infrastructure/repositories/order-repository');

async function PlaceOrder(req, res) {
    try {
        const { clientId, appointmentsId } = req.body;
        const order = await placeOrder(clientId, appointmentsId, OrderRepositoryMongo.prototype)
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = { PlaceOrder };