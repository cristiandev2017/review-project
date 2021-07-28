import React from 'react';
import ReactDOM from 'react-dom';
import App from './Application/routes/App';
import reportWebVitals from './reportWebVitals';
//Redux
import {Provider} from "react-redux";
import store from "./Domain/store";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
