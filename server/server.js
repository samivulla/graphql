import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@as-integrations/express4';
import { resolvers } from './resolvers.js';
import { readFile } from 'node:fs/promises';
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4000;
const typeDefs = await readFile('./schema.graphql', 'utf-8');
const apolloServer = new ApolloServer({ typeDefs, resolvers });

await apolloServer.start();
//below line defines express will send all request for the "/graphql" path to the apolloMiddleware, which will handle the GraphQL requests using the apolloServer instance.
app.use('/graphql', apolloMiddleware(apolloServer));
app.listen(9000, () => {
  console.log('Server is running on port 9000');
});