class Description {
  constructor(description) {
    if (!description) {
        throw new Error("Debes incluir una descripcion");
    }
    this.description = description;
  }
}
export default Description;