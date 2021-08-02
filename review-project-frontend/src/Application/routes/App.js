//React
import React, { Component } from 'react';
//Componentes/paginas
import NewEmploye from '../pages/Employe/NewEmploye';
import Home from '../pages/Home';
import Employes from '../pages/Employe/Employes';
import NotFoundPage from './../layout/NotFoundPage';
import NewClient from '../pages/Client/NewClient';
import EditEmploye from './../pages/Employe/EditEmploye';
import EditEmployeEmail from './../pages/Employe/EditEmployeEmail';
import Register from './../pages/Auth/Register';
import Login from './../pages/Auth/Login';
import Admin from '../pages/Admin/Admin';
import Citas from './../pages/Client/Citas';
import Clients from '../pages/Client/Clients';
import NewService from '../pages/Services/newService';
import Services from './../pages/Services/Services';
import ServicesUser from './../pages/Services/ServicesUser';

//import { connect } from "react-redux";
//import { getUser } from "../../Domain/selectors/user";

//Manejador de paginas publicas y privadas
//import { PrivateRoute, PublicRoute } from "./Routes";
import { PublicRoute, PrivateRoute } from './Routes';
import { auth } from '../../Infrastructure/services/firebase/firebase';
//Estaticos
import Header from '../layout/Header';
import Footer from './../layout/Footer';

//Rutas
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/admin-newemploye"
            component={NewEmploye}
            authenticated={this.state.authenticated}
          />
          <Route
            exact
            path="/admin-listemployes"
            component={Employes}
            authenticated={this.state.authenticated}
          />
          <Route
            exact
            path="/admin-editemployes"
            component={EditEmploye}
            authenticated={this.state.authenticated}
          />
          <Route
            exact
            path="/admin-editemployesemail"
            component={EditEmployeEmail}
          />
          <Route exact path="/admin-clients" component={Clients} />
          <Route
            exact
            path="/admin-newclient"
            component={NewClient}
            authenticated={this.state.authenticated}
          />
          <Route exact path="/admin-newservice" component={NewService} />
          <Route exact path="/admin-listservices" component={Services} />
          <Route
            exact
            path="/register"
            component={Register}
            authenticated={this.state.authenticated}
          />
          <Route
            exact
            path="/servicesuser"
            component={ServicesUser}
          />
          <PrivateRoute
            exact
            path="/citas"
            component={Citas}
            authenticated={this.state.authenticated}
          />
          <PublicRoute
            exact
            path="/login"
            component={Login}
            authenticated={this.state.authenticated}
          />
          <Route exact path="/admin" component={Admin} />
          <Route path={'*'} component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

//tipo desde el estado
/*
const mapStateToProps = (state) => {
    return {
        clientone:getUser(state)
    }
}

export default connect(mapStateToProps, null)(App);
*/
export default App;
