const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

const port = 4000;

app.use('/graphql', graphqlHTTP({
  
}))

app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`)
});