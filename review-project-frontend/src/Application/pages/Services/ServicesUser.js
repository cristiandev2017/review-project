import React,{Fragment,useEffect} from "react";
import "./static/style.css";
import { bindActionCreators } from "redux";
import {listServicesAction} from "../../../Domain/actions/serviceActions.js";
import {connect} from "react-redux";
import { getServices } from './../../../Domain/selectors/service';
import ServiceItemUser from './ServiceItemUser';

const ServicesUser = ({services,listServicesAction}) => {
  //Llamo la accion
  useEffect(() => {
    const listServices = () =>listServicesAction();
    listServices();
  }, []);
  return(
<Fragment>
<div class="main">
  <h1>Nuestros servicios</h1>
  <ul className="cards">
  {services.length === 0
  ? "No hay registros"
  :services.map((service)=>(
    <ServiceItemUser key={service._id} service={service} />
              ))}
  </ul>
</div>
  </Fragment>
  );
  };

const mapStateToProps = (state) => {
  return {
    services: getServices(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { listServicesAction },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesUser);
//export default ServicesUser;
