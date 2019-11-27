import { gql } from "apollo-boost";


export const POST_MUTATION = gql`
  mutation AddPost($content: String!, $userName: String!) {
    addPost(content: $content, userName: $userName) {
      _id
      content
      likes
      date
    }
  }
`;
export const GET_POSTS = gql`
 query GetAllPosts {
    getAllPosts {
      content
      _id
      likes
      userName
      date
      comments {
        content
        userName
        likes
        date
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($content: String!, $userName:String!, $postId: String!) {
    addComment(content: $content, userName: $userName, postId: $postId) {
      content
      userName
      likes
      date
    }
  }
`
export const LIKE_POST = gql`
  mutation LikePost($postId: String!) {
    likePost(postId: $postId) {
      content
      _id
      likes
      date
    }
  }
`
