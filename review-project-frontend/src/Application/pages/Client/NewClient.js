import React, {useState} from 'react';
//import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
//import { bindActionCreators } from "redux";
//Acciones de redux
import {addNewClientAction} from '../../../Domain/actions/clientActions'; 

const NewClient = () => {
    //Datos de mi formulario
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [birthday, setBirthday] = useState('');

    //Temporalmente con useDispatch y useSelector
    const dispatch = useDispatch();

    //Crear la accion para disparar la funcion
    const addClient = (client) =>  dispatch(addNewClientAction(client));

    const submitAddClient = e =>{
        //Prevengo que se recargue la pagina
        console.log("Estoy llamando el clic");
        e.preventDefault();
        
        //Algunas validaciones del formulario

        //Ejecutar accion del nuevo elemento
        addClient({
            name,
            email,
            user,
            phone, 
            birthday
        })        
    }

    return(
    <div>
        <h2>Agregar Cliente</h2>
        <form onSubmit={submitAddClient}>
            Name
            <input 
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}    
            />
            Phone
             <input 
                type="text"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}    
            />
            Email
             <input 
                type="text"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}    
            />
            UserName
             <input 
                type="text"
                name="user"
                value={user}
                onChange={e => setUser(e.target.value)}    
            />
            Cumpleaños
             <input 
                type="text"
                name="birthday"
                value={birthday}
                onChange={e => setBirthday(e.target.value)}    
            />
            <button type="submit"> Agregar</button>
        </form>
    </div>
    )
}

//const mapDispatchToProps = (dispatch) => {
//  return bindActionCreators({ addNewClientAction }, dispatch);
//};

export default NewClient;
