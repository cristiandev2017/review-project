const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    fullName: {
        type: String,
    },
    photoURL: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true,
    },
    services: [{
        type: Array,
    }]
});

module.exports = mongoose.model('Employee', EmployeeSchema);
