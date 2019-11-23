const mongoose = require('mongoose');

const { User } = require('../models/models');

module.exports = {
  Query: {
      getUsers: async () => await User.find({}).exec()
  },
  Mutation: {
      addUser: async (_, args) => {
          try {
              let response = await User.create(args);
              return response;
          } catch(e) {
              return e.message;
          }
      }
  }
};
