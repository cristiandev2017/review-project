//React
import React from 'react'
//Componentes/paginas
import NewEmploye from './../pages/NewEmploye';
import Home from  '../pages/Home';
import Employes from '../pages/Employes';
import NotFoundPage from './../layout/NotFoundPage';
import NewClient from '../pages/Client/NewClient';
import Register from './../pages/Auth/Register';
import Login from './../pages/Auth/Login';
import Test from './../pages/Auth/Test';

//Redux
import {Provider} from "react-redux";
import store from "../../Domain/store";

//Rutas
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newemploye" component={NewEmploye}/>
          <Route exact path="/listemployes" component={Employes} />
          <Route exact path="/newclient" component={NewClient}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
           <Route exact path="/test" component={Test} />
          <Route path={"*"} component={NotFoundPage} /> 
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;