const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;

// Dummy data
const books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: 1 },
  { name: 'The Final Empire', genre: 'Fantasy', id: 2},
  { name: 'The Long Earth', genre: 'Sci-Fi', id: 3},
]

// Define Book Type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// Define Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        // Code to get data from db / other source
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});