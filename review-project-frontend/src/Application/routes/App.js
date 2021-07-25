//React
import React from 'react'
//Componentes/paginas
import NewEmploye from './../pages/NewEmploye';
import Home from  '../pages/Home';

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
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;