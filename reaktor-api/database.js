const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(
    'mongodb://JuusoO:Prejuqwe123@ds255588.mlab.com:55588/koasandbox',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('Successfully connected to database');
  });

}

module.exports = initDB;
