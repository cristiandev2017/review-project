const Order = require('../../../domain/order/Order');

async function placeOrder(clientId, appointmentsId, OrderRepository) {
    if (!clientId) {
        return {
            errorMessage: 'Es necesario el Id de un cliente para crear una orden',
            success: false
        }
    }
    const order = new Order(clientId, appointmentsId);
    return await OrderRepository.save(order);
}

module.exports = { placeOrder };