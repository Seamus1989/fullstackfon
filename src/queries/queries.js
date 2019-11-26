import { gql } from "apollo-boost";


export const POST_MUTATION = gql`
  mutation AddPost($content: String!, $userName: String!) {
    addPost(content: $content, userName: $userName) {
      _id
      content
      likes
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
      comments {
        content
        userName
        _id
        likes
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
    }
  }
`
