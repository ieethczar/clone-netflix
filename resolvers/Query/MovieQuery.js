const Movies = require('../../models/Movie')

module.exports = {
    getMovies:(root,args,context,info) => {
        return Movies.find(args).exec()
    },
    getMovie:(root,args) => {
        if(args.id) return Movies.findById(args.id).exec()
        if(args.title) return Movies.find({title:args.title}).exec()
        if(args.title && args.id) return Users.find({title:args.title, _id:args.id}).exec()
        return new Error('You must pass a parameter')
    }
}