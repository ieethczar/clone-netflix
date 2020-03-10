const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	birth_date: {
		type: Date,
	},
	movie_viewed: {
		type: [Schema.Types.ObjectId],
		ref: 'movie',
	},
	is_active: {
		type: Boolean,
		default: true,
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('user', UsersSchema);