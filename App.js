const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();
const user = require('./routes/user.route');
var database = require('./config/database');
var mongoose = require('mongoose');

//connect to MongoDB
mongoose.connect(database.url);
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connection succesful')
});
app.use(bodyParser.json());
app.use('/products', product);
app.use('/users', user);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
