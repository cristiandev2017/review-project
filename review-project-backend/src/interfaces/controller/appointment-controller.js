const { scheduleDate } = require('../../application/use-cases/appointment/schedule-appointment');
const { getAllAppointments, getAppointmentById } = require('../../application/use-cases/appointment/get-appointment');
const { cancelDate } = require('../../application/use-cases/appointment/delete-appointment');
const { rescheduleDate } = require('../../application/use-cases/appointment/update-appointment');
const { AppointmentRepositoryMongo } = require('../../infrastructure/repositories/appointment-repository');

async function ScheduleAppointment(req, res) {
    try {
        const { date, serviceID, serviceValue } = req.body;
        const appointment = await scheduleDate(date, serviceID, serviceValue, AppointmentRepositoryMongo.prototype);
        res.json(appointment);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function UpdateAppointment(req, res) {
    try {
        const { id, date } = req.body;
        console.log("le esta llegando esto por parametro", req.body);
        res.json(await rescheduleDate(id, date, AppointmentRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function GetAllAppointments(req, res) {
    try {
        res.json(await getAllAppointments(AppointmentRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function GetAppointmentById(req, res) {
    try {
        const { id } = req.body;
        res.json(await getAppointmentById(id, AppointmentRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function DeleteAppointment(req, res) {
    try {
        const { id } = req.body;
        res.json(await cancelDate(id, AppointmentRepositoryMongo.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { ScheduleAppointment, GetAllAppointments, GetAppointmentById, DeleteAppointment, UpdateAppointment };