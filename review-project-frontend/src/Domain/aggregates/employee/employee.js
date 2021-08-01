import Fullname from './values/fullName';
import PhotoURL from './values/photoURL';
import Email from './values/email';
import Services from './values/services';

class Employee{
    constructor(fullName,photoURL,email,services){
        this.fullName =validateFullname(fullName) ;
        this.photoURL = validatePhotoURL(photoURL);
        this.email = validateEmail(email);
        this.services = validateServices(services);
    }   
}

export default Employee;
function validateFullname(fullName) {
    if (!(fullName instanceof Fullname)) {
        throw new Error("Para agregar nombre debe introducir una instancia de fullName")
    }
    return fullName;
}

function validatePhotoURL(photoURL) {
    if (!(photoURL instanceof PhotoURL)) {
        throw new Error("Para agregar descripcion debe introducir una instancia de PhotoURL")
    }
    return photoURL;
}

function validateEmail(email) {
    if (!(email instanceof Email)) {
        throw new Error("Para agregar un precio debe introducir una instancia de Email")
    }
    return email;
}

function validateServices(services) {
    if (!(services instanceof Services)) {
        throw new Error("Para agregar un precio debe introducir una instancia de Email")
    }
    return services;
}
