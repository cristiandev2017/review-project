'use-strict';

class Client {
  constructor(fullName, photoURL, email, phoneNumber, birthday) {
    this.fullName = fullName;
    this.photoURL = photoURL;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthday = birthday;
  }
}

module.exports = Client;
