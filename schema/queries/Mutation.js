// Import GraphQL Types
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

// Import graphql Types
import { AuthorType, BookType } from '../types/AllTypes';

// Import database models
import { Author, Book } from '../../models/allModels';

// Define the Mutation Query - this is how data is Created (POST), Removed (DELETE), Updated (PUT) - CrUD
const Mutation = new GraphQLObjectType({
  name: 'Mutation',

  // Define the methods for Mutating/Changing elements in the database
  fields: {
    
    // Add an author to the database
    addAuthor: {
      type: AuthorType,
      // Data sent in the POST request
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age
        });
        // Save the new Author and Return the values when queried
        return author.save();
      }
    },

    // Add a book to the database
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID },
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    }
  }
});

export default Mutation;