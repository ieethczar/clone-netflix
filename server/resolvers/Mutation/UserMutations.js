const User = require('../../models/User');

module.exports = {
	createUser: (root, args) => {
		return User.create(args.data).exec();
	}
};
