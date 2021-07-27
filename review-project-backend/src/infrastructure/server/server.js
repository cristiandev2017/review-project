require('dotenv').config();
const app = require('../../index');
const makeConnection = require('../database/databse');

makeConnection();
app.listen(process.env.PORT, () => {
    console.log('Listening at port: ' + process.env.PORT);
})