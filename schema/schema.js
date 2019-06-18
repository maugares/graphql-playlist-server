// Import GraphQL Types
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} from 'graphql';
import _ from 'lodash'; // Allows to search in arrays, objects and strings

// Import graphql Types
import AuthorType from './types/AuthorType'
import BookType from './types/BookType'

// Import database models
import Author from '../models/author'
import Book from '../models/book'

// Define Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Using lodash
        // return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Using normal array.find()
        // return authors.find(author => author.id === args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        // return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        // return authors;
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});