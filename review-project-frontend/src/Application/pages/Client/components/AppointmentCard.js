import React from 'react';

function AppointmentCard({cita}) {
    const {name,date} = cita;
    return (
        <div className="container d-flex justify-content-between border rounded border-dark p-4 my-3">
            <div className="text-left">
                <h3>{name}</h3>
                <p>{date}</p>
            </div>
            <div className="d-flex align-items-end">
            </div>
        </div>
    );
}

export default AppointmentCard;