import React,{useState} from 'react'

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
//import { withRouter } from "react-router-dom"; -> history
//Acciones de redux
import {addNewServiceAction} from '../../../Domain/actions/serviceActions'; 
//history
function NewService({addNewServiceAction}) {
  //Datos de mi formulario
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [employeeID, setEmployeeID] = useState();

    //Temporalmente con useDispatch y useSelector
    //const dispatch = useDispatch();

    //Crear la accion para disparar la funcion
    const addService = (service) => addNewServiceAction(service);

    const submitService = e =>{
        //Prevengo que se recargue la pagina
        e.preventDefault();       
        //Algunas validaciones del formulario

        //Ejecutar accion del nuevo elemento
        addService({
            name,
            description,
            value,
            employeeID,
        })        
    }
    

    return(
    <div className="mt-4">
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
         <h2 className="text-center">Agregar servicio</h2>
        <hr/>
        <form onSubmit={submitService}>
            <label>Nombre</label>
            <input 
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}    
            />
            <label>Descripcion</label>
             <input 
                type="text"
                className="form-control"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}    
            />
            <label>Valor</label>
             <input 
                type="number"
                className="form-control"
                name="value"
                value={value}
                onChange={e => setValue(e.target.value)}    
            />
            <label>EmpleadoID</label>
             <input 
                type="text"
                className="form-control"
                name="employeeID"
                value={employeeID}
                onChange={e => setEmployeeID(e.target.value)}    
            />            
            <button className="btn btn-primary btn-block" type="submit"> Agregar</button>
        </form>
   
        </div>
        <div className="col-3"></div>
    </div>


 </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addNewServiceAction }, dispatch);
};

export default connect(null,mapDispatchToProps)(NewService);
