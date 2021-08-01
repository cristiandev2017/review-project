class Value {
  constructor(value) {
    if (!value) {
        throw new Error("El valor no puede ser nulo");
    }
    if (value <= 0 ){
      throw new Error("El valor no puede ser inferior o igual a 0");
    }
    this.value = value;
  }
}
export default  Value;