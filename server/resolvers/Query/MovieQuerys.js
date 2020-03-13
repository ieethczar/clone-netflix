const Movie = require('../../models/Movie');

module.exports = {
	getMovies: (root, args) => Movie.find(args).exec(), 
	getMovie: (root, args) => {
		if(args.id) {
			return Movie.findById(args.id).exec();
		}
		return new Error('You must pass one parameter');
	},
	getMoviesByCategory: (root, args) => {
		return Movie.find({ category: { $in:[args.id] } });
	}
};