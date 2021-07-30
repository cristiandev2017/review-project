async function deleteOrder(id, OrderRepository) {
    if (!id) {
        return {
            errorMessage: 'Es necesario el Id de la orden a eliminar',
            success: false
        }
    }
    return await OrderRepository.delete(id);
}

module.exports = { deleteOrder };