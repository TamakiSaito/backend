const database = require('./database');
// Apollo Sever Import
const { ApolloServer, gql } = require('apollo-server');

console.log(database);

// typeDefs: GraphQL schema
const typeDefs = gql`
  type Query {
    teams: [Team]
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  } 
`

// resolvers: Action関数(get, create, update, delete全てのアクション)
const resolvers = {
  Query: {
    teams: () => database.teams
  }
}

// ApolloServer: GraphQL Server
// {}の引数を
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready ${url}`);
})