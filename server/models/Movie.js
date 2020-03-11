const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	duration: {
		type: Number,
		required: true,
	},
	tags: {
		type: [String]
	},
	banner:{
		type: String,
	},
	media: {
		type: String,
		required: true,
	},
	clasification: {
		type: String,
		enum: ['G','PG','PG-13','R','NC-17'],
		required: true,
	},
	view_by: {
		type: [Schema.Types.ObjectId],
		ref: 'user'
	},
	category: {
		type: [Schema.Types.ObjectId],
		ref: 'category'
	},
	is_active: {
		type: Boolean,
		default: true,
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('movie', MovieSchema);