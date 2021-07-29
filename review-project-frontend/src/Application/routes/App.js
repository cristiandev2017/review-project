//React
import React, { Component } from "react";
//Componentes/paginas
import NewEmploye from "../pages/Employe/NewEmploye";
import Home from "../pages/Home";
import Employes from "../pages/Employe/Employes";
import NotFoundPage from "./../layout/NotFoundPage";
import NewClient from "../pages/Client/NewClient";
import Register from "./../pages/Auth/Register";
import Login from "./../pages/Auth/Login";
import Test from "./../pages/Auth/Test";
//import { connect } from "react-redux";
//import { getUser } from "../../Domain/selectors/user";

//Manejador de paginas publicas y privadas
import { PrivateRoute, PublicRoute } from "./Routes";
import {auth} from "../../Infrastructure/services/firebase/firebase"
//Estaticos
import Header from "../layout/Header";
import Footer from "./../layout/Footer";

//Rutas
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <PrivateRoute
            exact
            path="/newemploye"
            component={NewEmploye}
           authenticated={this.state.authenticated}
          />
          <PrivateRoute
            exact
            path="/listemployes"
            component={Employes}
           authenticated={this.state.authenticated}
          />
          <PrivateRoute
            exact
            path="/newclient"
            component={NewClient}
           authenticated={this.state.authenticated}
          />
          <PublicRoute
            exact
            path="/register"
            component={Register}
            authenticated={this.state.authenticated}
          />
          <PublicRoute exact path="/login" component={Login} authenticated={this.state.authenticated} />
          <Route exact path="/test" component={Test} />
          <Route path={"*"} component={NotFoundPage} />
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
