import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//Acciones de redux
import {addNewEmployeAction} from '../../Domain/actions/employeActions'; 

const NewEmploye = () =>{

    //Datos de mi formulario
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [role, setRole] = useState('');

    //Temporalmente con useDispatch y useSelector
    const dispatch = useDispatch();

    //Crear la accion para disparar la funcion
    const addEmploye = (employe) => dispatch(addNewEmployeAction(employe));

    const submitAddEmploye = e =>{
        //Prevengo que se recargue la pagina
        e.preventDefault();
        
        //Algunas validaciones del formulario

        //Ejecutar accion del nuevo elemento
        addEmploye({
            name,
            phone, 
            email,
            specialty,
            role
        })        
    }

    return(
    <div>
        <h2>Agregar empleado</h2>
        <form onSubmit={submitAddEmploye}>
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
            Especialidad
             <input 
                type="text"
                name="specialty"
                value={specialty}
                onChange={e => setSpecialty(e.target.value)}    
            />
            Rol
             <input 
                type="text"
                name="role"
                value={role}
                onChange={e => setRole(e.target.value)}    
            />
            <button type="submit"> Agregar</button>
        </form>
    </div>
    )
}

export default NewEmploye;
