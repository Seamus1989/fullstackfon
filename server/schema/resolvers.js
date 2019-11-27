const uniqid = require('uniqid');
const { Posts } = require('../models/models');
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

module.exports = {
  Query: {
      getAllPosts: async () => await Posts.find({}).exec(),
      getUserPosts: async (_, args) => await Posts.find({userName : args.userName}).exec()
  },
  Mutation: {
      addPost: async(_, args) => {
        let date = new Date();
        try {

          let response = await Posts.create({...args, likes: 0, comments:[], date: date });
          return response
        } catch(e) {
            return e.message;
        }
      },
      addComment: async(_, args) => {
        try {
          let date = new Date();
          let response = await Posts.findOneAndUpdate(
              { _id: args.postId },
              { $push: { comments : {...args, likes : 0, date: date } } },
              {safe: true, upsert: true, new : true}
            )
          return response
        } catch(e) {
          return e.message
        }
      },
      likePost: async(_, args) => {
        try {
          let response = await Posts.findOneAndUpdate(
              { _id: args.postId },
              { $inc: { likes : 1 } },
              {safe: true, upsert: true, new : true}
            )
          return response
        } catch(e) {
          return e.message
        }
      }
  }
};
