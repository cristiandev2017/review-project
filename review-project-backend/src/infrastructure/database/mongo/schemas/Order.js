const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    clientId: {
        type: String,
        required: true,
        unique: true
    },
    appointmentsId: [{
        type: Array,
        required: true
    }]
})

module.exports = mongoose.model('Order', OrderSchema);