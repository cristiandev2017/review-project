import React, {useState} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import Select from "react-select";
//Acciones de redux
import {addNewEmployeAction} from '../../../Domain/actions/employeActions'; 


const NewEmploye = ({addNewEmployeAction}) =>{

    //Datos de mi formulario
    const [fullName, setFullName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');
    var [services, setServices] = useState();

    var Servicename = [
        {
            value:1,
            label:"Corte de cabello"
        },
        {
            value:2,
            label:"Manicure"
        },
        {
            value:3,
            label:"Pedicure"
        },
        {
            value:4,
            label:"Corte de barba"
        },
    ]
    //Temporalmente con useDispatch y useSelector
    //const dispatch = useDispatch();

    //Crear la accion para disparar la funcion
    const addEmploye = (employe) => addNewEmployeAction(employe);

    const submitAddEmploye = e =>{
        //Prevengo que se recargue la pagina
        e.preventDefault();
        
        //Algunas validaciones del formulario

        //Ejecutar accion del nuevo elemento
        addEmploye({
            fullName,
            photoURL,
            email,
            services,
        })        
    }
    
    var Ddlhandle = (e) =>{
        setServices(Array.isArray(e)?e.map(x=>x.label):[]);
    }

    return(
    <div className="mt-4">
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
         <h2 className="text-center">Agregar empleado</h2>
        <hr/>
        <form onSubmit={submitAddEmploye}>
            <label>Nombre</label>
            <input 
                type="text"
                name="fullName"
                className="form-control"
                value={fullName}
                onChange={e => setFullName(e.target.value)}    
            />
            <label>URL de Foto</label>
             <input 
                type="text"
                className="form-control"
                name="photoURL"
                value={photoURL}
                onChange={e => setPhotoURL(e.target.value)}    
            />
            Email
             <input 
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}    
            />
            Servicios
            <Select isMulti options={Servicename} onChange={Ddlhandle}></Select>
            <p>Seleccionaste:{services + " "}</p>
            <button className="btn btn-primary btn-block" type="submit"> Agregar</button>
        </form>
   
        </div>
        <div className="col-3"></div>
    </div>


 </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addNewEmployeAction }, dispatch);
};

export default connect(null,mapDispatchToProps)(NewEmploye);
//export default NewEmploye;
