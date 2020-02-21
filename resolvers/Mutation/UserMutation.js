const Users = require('../../models/User')

module.exports = {
    createUser:(root,args) => {
        return Users.create(args.data)
    }
}