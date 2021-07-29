const Appointment = require('../../domain/appointment/Appointment');
const AppointmentSchema = require('../database/mongo/schemas/Appointment');
const AppointmentRepository = require('../../domain/appointment/AppintmentRepository');

class AppointmentRepositoryMongo extends AppointmentRepository {
    constructor() {
        super();
    }

    async save(appointment) {
        const { date, serviceID, serviceValue } = appointment;
        const mongoAppointment = await AppointmentSchema({ date, serviceID, serviceValue });
        await mongoAppointment.save();
        return new Appointment(mongoAppointment.date, mongoAppointment.serviceID, mongoAppointment.serviceValue);
    }

    async update(id, appointment) {
        return await AppointmentSchema.findByIdAndUpdate(id, appointment, { new: true });
    }

    async findAll() {
        return await AppointmentSchema.find({});
    }

    async findById(id) {
        return await AppointmentSchema.findById(id);
    }

    async delete(id) {
        return AppointmentSchema.deleteOne({ _id: id });
    }

}

module.exports = { AppointmentRepositoryMongo };