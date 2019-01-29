// Require modules
const express = require('express');
const mongoose = require('mongoose');

// Express instance
const app = express();

// Set up middleware
// Body parser in express, instead of bodyParser.urlencoded....
app.use(express.urlencoded({ extended: false }));

// Controllers, needs to be above catch-all route
app.use('/v1/bounties', require('./controllers/v1/bounties'));


// Catch all route
app.get('*', (req, res) => {
	res.status(404).send({ message: 'Not Found' })
});

// Listen
app.listen(process.env.PORT || 3000, () => {
	console.log('API is up and running');
});







