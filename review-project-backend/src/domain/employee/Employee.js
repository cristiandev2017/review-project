'use-strict';

class Employee {
    constructor(fullName, photoURL, email, services) {
        this.fullName = fullName;
        this.photoURL = photoURL;
        this.email = email
        this.services = services;
    }
}

module.exports = Employee;