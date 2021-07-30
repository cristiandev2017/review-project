const Order = require('../../domain/order/Order');
const OrderSchema = require('../database/mongo/schemas/Order');
const OrderRepository = require('../../domain/order/OrderRepository');

class OrderRepositoryMongo extends OrderRepository {

    constructor() {
        super();
    }

    async save(order) {
        const { clientId, appointmentsId } = order;
        const mongoOrder = new OrderSchema({ clientId, appointmentsId });
        await mongoOrder.save();
        return new Order(mongoOrder.clientId, mongoOrder.appointmentsId);
    }

    async delete(id) {
        return await OrderSchema.deleteOne({ _id: id });
    }

    async findByid(id) {
        return await OrderSchema.findOne({});
    }

    async findAllByClientId(clientId) {
        return await OrderSchema.findMany({ clientId: clientId });
    }
}

module.exports = { OrderRepositoryMongo }