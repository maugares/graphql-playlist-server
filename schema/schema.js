// Import GraphQL Types
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
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
        // Using lodash
        // return _.find(books, { id: args.id });
      }
    },
    // Returns an author with a given ID
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Using normal array.find()
        // return authors.find(author => author.id === args.id);
      }
    },
    // Returns an array with all the books stored in the database
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        // return books;
      }
    },
    // Returns an array with all the authors stored in the database
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        // return authors;
      }
    }
  }
});

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
        name: { type: GraphQLString},
        age: { type: GraphQLInt},
      },
      resolve(parent, args){
        let author = new Author ({
          name: args.name,
          age: args.age
        });
        // Save the new Author and Return the values when queried
        return author.save();
      }
    },
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});