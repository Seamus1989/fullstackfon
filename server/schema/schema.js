const { gql } = require("apollo-server");

module.exports = {
  typeDefs : gql`
    type Query {
        getAllPosts : [Posts]
        getUserPosts(userName: String!): [Posts]
    }
    type Mutation {
        addPost(content: String!, userName: String!) : Posts
        addComment(content: String!, postId: String!, userName: String!) : Comments
        likePost(postId:String!) : Posts
    }

    type Posts {
      content: String!
      userName: String!
      likes: Int
      comments: [Comments]
      _id: String
      date: String
    }
    type Comments {
      content: String!
      userName: String!
      likes: Int
      _id: String
      date: String
    }
`
}
