const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLInt },
    author: { type: GraphQLString},
    genre: { type: GraphQLString }
  })
})