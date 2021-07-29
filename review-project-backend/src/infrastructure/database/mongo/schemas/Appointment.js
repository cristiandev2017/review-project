const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    date: {
        type: Date
    },
    serviceID: {
        type: String
    },
    serviceValue: {
        type: Number
    }
})

module.exports = mongoose.model('Appointment', AppointmentSchema);