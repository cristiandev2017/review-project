import React from 'react';
import { auth } from './../../../Infrastructure/services/firebase/firebase';

function Test() {
    return (
        <div>
            <h1>Test</h1>
             {auth().currentUser ? <h5>{auth().currentUser.displayName}</h5> : null}
            <button onClick={() => auth().signOut()}>Logout</button>
        </div>
    )
}

export default Test;