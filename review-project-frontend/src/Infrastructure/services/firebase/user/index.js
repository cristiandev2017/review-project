import {auth} from "../firebase";

const getUser =  () =>{
        return {
            userName:auth().currentUser.displayName,
            userEmail:auth().currentUser.email,
            photoURL:auth().currentUser.photoURL
        }
    }

export default getUser;
