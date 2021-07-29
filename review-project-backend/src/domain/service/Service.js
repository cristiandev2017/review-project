'use strict';

class Service {
    constructor(name, description, value, employeeID) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.employeeID = employeeID;
    }
}

module.exports = Service;