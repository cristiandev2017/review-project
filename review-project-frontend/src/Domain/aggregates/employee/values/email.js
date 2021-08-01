class Email {
  constructor(email) {
    if (!email) {
        throw new Error("Debes incluir un email");
    }
    this.email = email;
  }
}
export default  Email;