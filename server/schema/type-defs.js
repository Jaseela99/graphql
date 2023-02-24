import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
    nationality: String!
  }
  #get calls
  type Query {
    users: [User!]!
    User(id: ID!): User!
  }
  #post
  #while creating a user ,if we did nt provide any field , input could help us to have a default value for that
  input createUserInput {
    name: String!
    age: Int!
    nationality: String! # if there is nt any nationality it takes in INDIA as the nationality
  }
  input updateUserInput {
    id: ID!
    newName: String!
  }
  type Mutation {
    createUser(input: createUserInput!): User!
    updateUser(input: updateUserInput!): User
    deleteUser(id: ID!): User
  }
  #enum helps to validate
  # it allows only specific nationality
  enum Nationality {
    INDIA
    BRAZIL
  }
`;

export default typeDefs;
