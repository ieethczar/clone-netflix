const UserMutations = require('./UserMutations');
const MovieMutations = require('./MovieMutations');
const CategoryMutations = require('./CategoryMutations');

module.exports = {
	...UserMutations,
	...MovieMutations,
	...CategoryMutations,
};
