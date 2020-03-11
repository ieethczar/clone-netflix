const User = require('../../models/User');

module.exports = {
	getUsers: (root, args) => User.find(args), 
	getUser: (root, args) => {
		if(args.email && args.id) {
			return User.find({ email: args.email, _id:args.id }).exec();
		}
		if(args.email) {
			return User.find({ email: args.email }).exec();
		}
		if(args.id) {
			return User.findById(args.id).exec();
		}
		return new Error('You must pass one parameter');
	},
};