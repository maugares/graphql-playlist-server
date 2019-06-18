// Import GraphQL Types
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

// Import relations
import BookType from './BookType'
import Book from '../../models/book';

// Define Author Type
export default new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // Return all the books in the database asociated with the given Author
        return Book.find({ authorId: parents.id })
      }
    }
  })
});