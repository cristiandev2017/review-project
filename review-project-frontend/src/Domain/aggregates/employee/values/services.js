class Services {
  constructor(services) {
    if (!services) {
        throw new Error("Debes incluir unos servicios");
    }
    this.services = services;
  }
}
export default  Services;