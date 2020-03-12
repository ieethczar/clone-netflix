const UserQuerys = require('./UserQuerys');
const MovieQuerys = require('./MovieQuerys');
const CategoryQuerys = require('./CategoryQuerys');

module.exports = {
	...UserQuerys,
	...MovieQuerys,
	...CategoryQuerys,
};