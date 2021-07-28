const mongoose = require('mongoose');
require('dotenv').config();

const makeConnection = async () => {
    await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("La Base de datos de virus ha sido actualizada");
        }).catch((err) => {
            console.log("Hay un error en la conexion con la BD: ", err)
        })
}

module.exports = makeConnection;