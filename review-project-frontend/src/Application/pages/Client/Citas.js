import React from 'react';
import UserInfo from './components/UserInfo';
import Order from './components/Order';


const Citas = () => {

  return (
    <div className="d-block d-flex flex-column justify-content-center">
      <UserInfo />
      <Order />
      {/*<button className="btn btn-success border rounded mx-auto">CREAR ORDEN</button>
 */}</div>
  );
};

export default Citas;
