async function getOrders(OrderRepository) {
    return await OrderRepository.findAll();
}

async function getOrderByClient(clientId, OrderRepository) {
    return await OrderRepository.findAllByClientId(clientId);
}

module.exports = { getOrders, getOrderByClient };