const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');

async function start() {
	const typeDefs = await importSchema(__dirname + '/schema.graphql');

	const MONGO_URI = 'mongodb+srv://tester:1234567890p@cluster0-xcaqz.mongodb.net/clone-netflix-db?retryWrites=true&w=majority';

	mongoose.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const mongo = mongoose.connection;

	mongo.on('error', error => console.log(error))
		.once('open', () => console.log('Connected to database'));

	const server = new ApolloServer({typeDefs,resolvers});

	server.listen().then(({url}) => {
		console.log(`Server ready set: ${url}`);
	});
}

start();
