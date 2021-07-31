class PhotoURL {
  constructor(photoURL) {
    if (!photoURL) {
        throw new Error("Debes incluir una imagen");
    }
    this.photoURL = photoURL;
  }
}
export default  PhotoURL;