// Import GraphQL Types
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
} from 'graphql';

// Import graphql Types
import { AuthorType, BookType } from '../types/AllTypes';

// Import database models
import { Author, Book } from '../../models/allModels';

// Define the Root Query - this is how data is Read (GET) - cRud
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',

  // Define the methods for Reading the data stored in the database
  fields: {

    // Returns a book with a given ID
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    },

    // Returns an author with a given ID
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id);
      }
    },

    // Returns an array with all the books stored in the database
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return Book.find({});
      }
    },

    // Returns an array with all the authors stored in the database
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        // return authors;
        return Author.find({});
      }
    },

  }
});

export default RootQuery;