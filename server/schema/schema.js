const { gql } = require("apollo-server");
const { User } = require('../models/models');
module.exports = {
  typeDefs : gql`
    type User {
        id: ID!
        userName: String
        email: String
    }
    type Query {
        getUsers: [User]
    }
    type Mutation {
        addUser(userName: String!, email: String!): User
    }
`
}
