import React from 'react';
import { auth } from '../../../../Infrastructure/services/firebase/firebase';

function UserInfo() {
  const user = auth().currentUser;
  return (
    <div className="container d-flex flex-column align-items-center my-3 py-4 border rounded border-dark">
      <div className={"pb-3"}>
        <img
          className={'rounded-circle'}
          src={user.photoURL}
          alt={'user-pic'}
        />
      </div>
      <h2>{user.displayName}</h2>
      <h5>{user.email}</h5>
    </div>
  );
}

export default UserInfo;
