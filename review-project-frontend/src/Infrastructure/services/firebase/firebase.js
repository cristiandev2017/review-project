import firebase from "firebase";
import "firebase/auth";
//import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEzsFguCfQQx1bp2j_y3SZaST0CtPfbEs",
    authDomain: "arquitecturareact.firebaseapp.com",
    projectId: "arquitecturareact",
    storageBucket: "arquitecturareact.appspot.com",
    messagingSenderId: "527661665867",
    appId: "1:527661665867:web:aba9f01f80c05bf13dc7ce"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;