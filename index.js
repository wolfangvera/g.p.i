'use strict'
// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cool = require('cool-ascii-faces');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; // Step 1
const api = require('./routes/index')



// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.kxsmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.get('/cool', (req, res) => res.send(cool()))

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
};


// HTTP request logger
/*app.use(morgan('tiny'));*/





app.listen(PORT, console.log(`Server is starting at ${PORT}`));