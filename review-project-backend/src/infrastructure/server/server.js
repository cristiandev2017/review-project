require('dotenv').config();
const app = require('../../index');
const makeConnection = require('../database/database');

makeConnection();
app.use('/haircutapi', require('../../interfaces/routes/client'));
app.listen(process.env.PORT, () => {
  console.log('Listening at port: ' + process.env.PORT);
});
