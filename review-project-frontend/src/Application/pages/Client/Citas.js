import React from 'react';
import UserInfo from './components/UserInfo';
import AppointmentsManager from './components/AppointmentsManager';

const Citas = (props) => {
  return (
    <div>
      <UserInfo />
      <AppointmentsManager />
    </div>
  );
};

export default Citas;
