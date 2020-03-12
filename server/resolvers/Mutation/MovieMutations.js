const Movie = require('../../models/Movie');

module.exports = {
	createMovie: (root, args) => {
		return Movie.create(args.data);
	}
};
