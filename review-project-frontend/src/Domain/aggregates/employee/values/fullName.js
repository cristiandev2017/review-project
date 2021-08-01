class Fullname {
  constructor(fullName) {
    if (!fullName) {
        throw new Error("Debes incluir un nombre");
    }
    this.fullName = fullName;
  }
}
export default  Fullname;