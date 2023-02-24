import UserList from "../mockData.js";
import _ from "lodash";
const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    User: (parent, args, context, info) => {
      /* query-->user-->name  so when we are accessing name user will be its parent level */
      console.log(parent);
      /* context is used to pass token for authentication and authorization context can take in req with headers which has the token */
      console.log(context);
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updateUser: (parent, args) => {
      const { id, newName } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.name = newName;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};

export default resolvers;
