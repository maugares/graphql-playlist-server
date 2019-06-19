// Import GraphQL Types
import { GraphQLSchema } from 'graphql';

// Import Root Query methods
import RootQuery from './queries/RootQuery';

// Import Mutation methods
import Mutation from './queries/Mutation'

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});