'use-strict';

class Order {
    constructor(clientId, appointmentsId) {
        this.clientId = clientId;
        this.appointmentsId = appointmentsId;
    }
}

module.exports = Order;