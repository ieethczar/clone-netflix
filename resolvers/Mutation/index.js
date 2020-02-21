const UserMutations = require('./UserMutation')
const MovieMutations = require('./MovieMutation')

module.exports = {
    ...UserMutations,
    ...MovieMutations
}