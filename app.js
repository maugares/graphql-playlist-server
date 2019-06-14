import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';

const app = express();

const port = 4000;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`)
});