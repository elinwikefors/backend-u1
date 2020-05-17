const mongoose = require('mongoose');
const Schema = mongoose.Schema

const studentSchema =  new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
		validate: function(v) {
			return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		}
	},
	address: {
		street: {
			type: String,
		},
		zipcode: {
			type: String,
		},
		city: {
			type: String,
		}
	}
});

const Students = mongoose.model('Student', studentSchema);

module.exports = Students;
