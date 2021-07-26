import React from 'react';
import {Link} from 'react-router-dom'; 

function NotFoundPage() {
    return (
        <div>
            <h1>Oh! Page not found! 404</h1>
            <Link to={"/"}>Regresar al Inicio</Link>
        </div>
    )
}

export default NotFoundPage
