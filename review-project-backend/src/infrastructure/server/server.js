require('dotenv').config();
const app = require('../../index');
const makeConnection = require('../database/database');

makeConnection();
app.use('/haircutapi', require('../../interfaces/routes/client'));
app.use('/haircutapi', require('../../interfaces/routes/employee'));
app.use('/haircutapi', require('../../interfaces/routes/appointment'));
app.use('/haircutapi', require('../../interfaces/routes/service'));
app.use('/haircutapi', require('../../interfaces/routes/order'));
app.listen(process.env.PORT, () => {
  console.log('Listening at port: ' + process.env.PORT);
});
