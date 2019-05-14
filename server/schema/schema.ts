import { mutation } from './mutations'
import { GraphQLSchema } from 'graphql'
import { RootQueryType } from './root_query_type'

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation
});
