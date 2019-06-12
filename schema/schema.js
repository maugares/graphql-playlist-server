const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;

// Define Book Type
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLInt },
    author: { type: GraphQLString },
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