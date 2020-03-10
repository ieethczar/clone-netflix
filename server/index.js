const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://tester:1234567890p@cluster0-xcaqz.mongodb.net/clone-netflix-db?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongo = mongoose.connection;

mongo.on('error', error => console.log(error))
  .once('open', () => console.log('Connected to database'))

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
