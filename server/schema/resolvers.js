const uniqid = require('uniqid');
const { Posts } = require('../models/models');

module.exports = {
  Query: {
      getAllPosts: async () => await Posts.find({}).exec(),
      getUserPosts: async (_, args) => await Posts.find({userName : args.userName}).exec()
  },
  Mutation: {
      addPost: async(_, args) => {
        try {
          let response = await Posts.create({...args, likes: 0, comments:[]});
          return response
        } catch(e) {
            return e.message;
        }
      },
      addComment: async(_, args) => {
        try {
          let response = await Posts.updateOne(
              { _id: args.postId },
              { $push: { comments : {...args, likes : 0} } },
              {safe: true, upsert: true, new : true},
              function(err) {
                console.log(err)
              }
            )
          console.log(response)
          return response;
        } catch(e) {
          return e.message
        }
      }
  }
};
