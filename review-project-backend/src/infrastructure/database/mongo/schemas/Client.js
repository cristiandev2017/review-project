const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
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
  phoneNumber: {
    type: String,
  },
  birthday: {
    type: Date,
  },
});

module.exports = mongoose.model('Client', ClientSchema);
