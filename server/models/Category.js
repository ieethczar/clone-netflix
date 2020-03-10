const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	clasification: {
		type: String,
		enum: ['G','PG','PG-13','R','NC-17'],
		required: true,
	},
	movies_in: {
		type: [Schema.Types.ObjectId],
		ref: 'movie'
	},
	is_active: {
		type: Boolean,
		default: true,
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('category', CategorySchema);