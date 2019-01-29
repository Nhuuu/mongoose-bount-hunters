const mongoose = require('mongoose');

// Create a schema for Bounty
const bountySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 2,
		maxLength: 100
	},
	wantedFor: {
		type: String,
		required: true
	},
	client: {
		type: String,
		required: true
	},
	ship: {
		type: String
	},
	reward: {
		type: Number,
		default: 10000
	},
	hunters: {
		type: Array
	},
	captured: {
		type: Boolean,
		default: false
	},
	lastSeen: {
		type: String
	}
})

module.exports = mongoose.model('Bounty', bountySchema);







