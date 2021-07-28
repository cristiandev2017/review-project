import React from 'react';
import { useDispatch } from 'react-redux';
import { loginClientAction } from './../../../Domain/actions/clientActions';
import { withRouter } from "react-router-dom";


const Login = ({history}) => {

    const dispatch = useDispatch();
    
    const handleGoogleAuth = () =>{
        dispatch(loginClientAction());
        history.push('/test');
    }

    return (
        <div>
           <h1>Login / Registro</h1> 
            Email
            <input type="text"></input>
            Password
            <input type="text"></input>
            <button>Ingresar</button><button>Registrar</button><button onClick={handleGoogleAuth}>Ingresar con Google</button>
        </div>
    )
}

export default (withRouter(Login));
