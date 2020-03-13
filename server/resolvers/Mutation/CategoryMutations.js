const Category = require('../../models/Category');

module.exports = {
	createCategory: (root, args) => {
		return Category.create(args.data);
	}
};
