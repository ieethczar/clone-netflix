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
	categories: {
		type: [Schema.Types.ObjectId],
		ref: 'category'
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
	view_by: {
		type: [Schema.Types.ObjectId],
		ref: 'user'
	},
	is_active: {
		type: Boolean,
		default: true,
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('movie', MovieSchema);