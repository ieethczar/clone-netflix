const Movies = require('../../models/Movie')

module.exports = {
    createMovie:(root, args) => {
        return Movies.create(args.data)
    }
}