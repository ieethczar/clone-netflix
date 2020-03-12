const Category = require('../../models/Category');

module.exports = {
	getCategories: (root, args) => Category.find(args).exec(), 
	getCategory: (root, args) => {
		if(args.id) {
			return Category.findById(args.id).exec();
		}
		return new Error('You must pass one parameter');
	},
};