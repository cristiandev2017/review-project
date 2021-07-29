const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    value: {
        type: Number
    },
    employeeID: {
        type: String
    }
})

module.exports = mongoose.model('Service', ServiceSchema);