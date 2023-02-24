import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/type-defs.js";
import resolvers from "./schema/resolvers.js";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { name: "token" };
  },
});

server.listen().then(({ url }) => {
  console.log(`Your Api is running:${url}:`);
});
