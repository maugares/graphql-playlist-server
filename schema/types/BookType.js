// Import GraphQL Types
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';

// Import relations
import AuthorType from './AuthorType';
import Author from '../../models/author';

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
        // Look for the author with the same id as the parent's authorId
        return Author.findById(parent.authorId)
      }
    }
  })
});