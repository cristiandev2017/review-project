const { placeOrder } = require('../../application/use-cases/order/create-order');
const { deleteOrder } = require('../../application/use-cases/order/delete-order');
const { getOrders, getOrderByClient } = require('../../application/use-cases/order/get-order');
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

async function DeleteOrder(req, res) {
    try {
        const { id } = req.body;
        res.json(await deleteOrder(id, OrderRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}
async function GetOrders(req, res) {
    try {
        res.json(await getOrders(OrderRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function GetOrderByClientId(req, res) {
    try {
        const { clientId } = req.body;
        res.json(await getOrderByClient(clientId, OrderRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { PlaceOrder, DeleteOrder, GetOrders, GetOrderByClientId };