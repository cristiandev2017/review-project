//React
import React from 'react'
//Componentes/paginas
import NewEmploye from '../pages/Employe/NewEmploye';
import Home from  '../pages/Home';
import Employes from '../pages/Employe/Employes';
import NotFoundPage from './../layout/NotFoundPage';
import NewClient from '../pages/Client/NewClient';
import Register from './../pages/Auth/Register';
import Login from './../pages/Auth/Login';
import Test from './../pages/Auth/Test';
import {connect} from 'react-redux';
import {getUser} from "../../Domain/selectors/user";

//Manejador de paginas publicas y privadas
import {PrivateRoute, PublicRoute} from "./Routes";

//Estaticos
import Header from '../layout/Header';
import Footer from './../layout/Footer';

//Rutas
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



const App = ({clientone}) => {
   return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/newemploye" component={NewEmploye} authenticated={(clientone.authenticated)}/>
          <PrivateRoute exact path="/listemployes" component={Employes} authenticated={(clientone.authenticated)} />
          <PrivateRoute exact path="/newclient" component={NewClient} authenticated={(clientone.authenticated)}/>
          <PublicRoute exact path="/register" component={Register} authenticated={(clientone.authenticated)} />
          <Route exact path="/login" component={Login} />
           <Route exact path="/test" component={Test} />
          <Route path={"*"} component={NotFoundPage} /> 
        </Switch>
      <Footer/>
    </Router>
  );
}

const mapStateToProps = (state) => {
    return {
        clientone:getUser(state)
    }
}

export default connect(mapStateToProps, null)(App);
//export default App;