// Import GraphQL Types
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
} from 'graphql';
import _ from 'lodash'; // Allows to search in arrays, objects and strings

// Import Types
import AuthorType from './types/AuthorType'
import BookType from './types/BookType'

// Import Dummy Data
import { authors, books } from './dummyData'

// Define Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Using lodash
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Using normal array.find()
        return authors.find(author => author.id === args.id);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});