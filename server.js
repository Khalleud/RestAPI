const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Configuring the database
const config = require('./config.js');
const mongoose = require('mongoose');
require('./routes.js')(app); 

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
  useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to ZeptoBook Product app"});
});

// listen on port 3000
app.listen(config.serverport, () => {
    console.log("Server is listening on port 3000");
});
