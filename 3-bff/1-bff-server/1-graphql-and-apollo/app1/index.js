const database = require('./database');
// Apollo Sever Import
const { ApolloServer, gql } = require('apollo-server');

console.log(database);

// typeDefs: GraphQL schema
const typeDefs = gql`
  type Query {
    teams: [Team]
    team(id: Int): Team 
    equipments: [Equipment]
    supplies: [Supply]
  }
  type Mutation {
    insertEquipment(
    id: String,
    used_by: String,
    count: Int,
    new_or_used: String
    ): Equipment
    editEquipment(
    id: String,
    used_by: String,
    count: Int,
    new_or_used: String
    ): Equipment
    deleteEquipment(id: String): Equipment
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
    supplies: [Supply]
  }
  type Equipment {
    id: String
    used_by: String
    count: Int
    new_or_used: String
  }
  type Supply {
    id: String
    team: Int
  }
`

// resolvers: Action関数(get, create, update, delete全てのアクション)
const resolvers = {
  Query: {
    teams: () => database.teams.map(team => {
      // supply.teamとteam.idが一緒の場合、returnした値がteam.suppliesに入る
      team.supplies = database.supplies.filter(supply => supply.team === team.id)
      return team;
    }),
    // 特定のidのみ取得: team.idとarg.idのidが一致するもののみ取得
    team: (_parent, arg, _context, _info) => {
      return database.teams.find(team => team.id === arg.id);
    },
    equipments: () => database.equipments,
    supplies: () => database.supplies
  },
  Mutation: {
    // Create
    insertEquipment: (_parent, args, _context, _info) => {
      database.equipments.push(args);
      return args;
    },
    // Update
    editEquipment: (_parent, args, _context, _info) => {
      return database.equipments.filter((equipment) => {
        return equipment.id === args.id;
      }).map((equipment) => {
        // equipment, argsをDeep Copyしてequipmentを返す
        Object.assign(equipment, args);
        return equipment;
      })[0]
    },
    // Delete
    deleteEquipment: (_parent, args, _context, _info) => {
      // result (mock dbだから)　: equipment.idとargs.idが一致する[0]番目のものを削除する
      const deleted = database.equipments.filter((equipment) => equipment.id === args.id)[0];
      // db update : 実際のDBをUPDATEする
      database.equipments = database.equipments.filter((equipment) => equipment.id !== args.id);
      return deleted;
    }
  }
}

// ApolloServer: GraphQL Server
// {}の引数を
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready ${url}`);
})

