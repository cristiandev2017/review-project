import React from 'react';

function AppointmentCard() {
    return (
        <div className="container d-flex justify-content-between border rounded border-dark p-4 my-3">
            <div className="text-left">
                <h3>NOMBRE CITA</h3>
                <p>FECHA DE LA CITA</p>
            </div>
            <div className="d-flex align-items-end">
                <p className="h1">✒</p>
                <p className="h1">❌</p>
            </div>
        </div>
    );
}

export default AppointmentCard;