class Name {
  constructor(name) {
    if (!name) {
        throw new Error("Debes incluir un nombre");
    }
    this.name = name;
  }
}
export default  Name;