const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    serviceID: {
        type: String
    },
    serviceValue: {
        type: Number
    }
})

module.exports = mongoose.model('Appointment', AppointmentSchema);