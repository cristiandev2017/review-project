'use-strict';

class Appointment {
    constructor(date, serviceID, serviceValue) {
        this.date = date;
        this.serviceID = serviceID;
        this.serviceValue = serviceValue;
    }
}

module.exports = Appointment;