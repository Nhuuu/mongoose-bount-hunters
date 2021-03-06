// Require modules
const cors = require('cors');
const express = require('express');

// Express instance
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json({limit: '50mb'}))
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







