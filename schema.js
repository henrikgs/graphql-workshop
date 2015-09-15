let db = require('./db/db.js');

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt
} from 'graphql';

let queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => {
    return {
      hello: {
        type: GraphQLString,
        resolve: () => {
          return 'world';
        }
      }
    }
  }
});

export default new GraphQLSchema({
  query: queryType
});
