import Name from './values/name';
import Description from './values/description';
import Value from './values/value';
import EmployeeID from './values/employeeID';

class Service{
    constructor(name,description,value,employeeID){
        this.name =validateName(name) ;
        this.description = validateDescription(description);
        this.value = validateValue(value);
        this.employeeID = validateEmployeeID(employeeID);
    }
}

export default Service;
function validateName(name) {
    if (!(name instanceof Name)) {
        throw new Error("Para agregar nombre debe introducir una instancia de Name")
    }
    return name;
}

function validateDescription(description) {
    if (!(description instanceof Description)) {
        throw new Error("Para agregar descripcion debe introducir una instancia de Description")
    }
    return description;
}

function validateValue(value) {
    if (!(value instanceof Value)) {
        throw new Error("Para agregar un precio debe introducir una instancia de Value")
    }
    return value;
}

function validateEmployeeID(employeeID) {
    if (!(employeeID instanceof EmployeeID)) {
        throw new Error("Para agregar un employedID debe introducir una instancia de EmployeeID")
    }
    return employeeID;
}