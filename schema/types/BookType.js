// Import GraphQL Types
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';

// Import relations
import AuthorType from './AuthorType'
import { authors } from '../dummyData'

// Define Book Type
export default new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // return authors.find(author => author.id === parent.authorId)
      }
    }
  })
});