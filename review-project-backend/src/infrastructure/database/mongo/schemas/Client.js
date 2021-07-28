const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  birthday: {
    type: Date,
  },
});

module.exports = mongoose.model('Client', ClientSchema);
