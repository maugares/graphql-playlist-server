import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const port = 4000;

// Allow cross-origin requests
app.use(cors());

// Connect to mongoDB database
mongoose.connect('mongodb+srv://mauro:mauro123@maugares-k7gqj.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
mongoose.connection.once('open', () => console.log('Connected to mongodb'))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`)
});