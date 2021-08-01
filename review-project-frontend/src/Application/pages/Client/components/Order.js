import React from 'react'
import AppointmentCard from './AppointmentCard'

export default function AppointmentsManager() {
    return (
        <div className="my-3 p-4 text-center">
            <div className="container align-items-center my-3 border rounded border-dark">
                <h1 className="py-2">Orden # idORDEN</h1>
                <AppointmentCard />
                <AppointmentCard />
                <button className="btn btn-success my-4 border rounded">AGREGAR CITA</button>
            </div>
        </div>
    )
}
