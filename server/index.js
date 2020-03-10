const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query{
        prueba(name:String):String
    }
`
const resolvers = {
    Query:{
        prueba: (root, args, contex, info) => `Hola Mundo ${args.name}`
    }
}

const server = new ApolloServer({typeDefs,resolvers})

server.listen().then(({url}) => {
    console.log(`Server ready set: ${url}`)
})
