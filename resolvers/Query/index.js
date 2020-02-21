const userQueries = require('./UserQuery')
const movieQueries = require('./MovieQuery')

module.exports = {
    ...userQueries,
    ...movieQueries
}