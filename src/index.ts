import { GraphQLServer, PubSub } from 'graphql-yoga';
import * as fs from 'fs';
import * as Query from './resolvers/Query';
import * as Mutation from './resolvers/Mutation';

const server = new GraphQLServer({
  typeDefs: fs.readFileSync(`${__dirname}/schema.graphql`).toString(),
  resolvers: {
    Query,
    Mutation,
  },
});

server.express.use(require('cors')());
server.express.use(require('body-parser')());

server.express.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('access-control-expose-headers', 'X-App-Build');
  next();
});

// Start the server
server.start(
  {
    port: 3000,
    cors: {
      credentials: true,
    },
  },
  () => {
    console.log('The server is up!');
  },
);
