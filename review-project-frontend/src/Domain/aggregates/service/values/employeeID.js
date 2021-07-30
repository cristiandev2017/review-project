class EmployeeID {
  constructor(employeeID) {
    if (!employeeID) {
        throw new Error("Debes tener un ID de empleado");
    }
    this.employeeID = employeeID;
  }
}
export default  EmployeeID;