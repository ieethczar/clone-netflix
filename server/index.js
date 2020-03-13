require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');

async function start() {
	const typeDefs = await importSchema(__dirname + '/schema.graphql');

	const MONGO_URI = process.env.MONGO_URI;

	mongoose.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const mongo = mongoose.connection;

	mongo.on('error', error => console.log(error))
		.once('open', () => console.log('Connected to database'));

	const schema = makeExecutableSchema({
		typeDefs,
		resolvers,
	});

	const server = new ApolloServer({
		schema,
		uploads: {
			maxFileSize: 50000000, // 50 MB
			maxFiles: 30,
			maxFieldSize: 50000000 // 50 MB
		},
		cors:{
			origin:process.env.WHITELIST.split(',')
		}
	});

	const PORT = process.env.PORT || 4000;

	server.listen({ port: PORT }).then(({url}) => {
		console.log(`Server ready set: ${url}`);
	});
}

start();
