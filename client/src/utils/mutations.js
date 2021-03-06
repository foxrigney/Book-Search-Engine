import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors:[String]!, $bookId: ID!, $title: String!, $description: String!, $image: String!) {
    saveBook(authors: $authors ,description: $description, title: $title,bookId: $bookId,image: $image
) {
    _id
    username
    email
   savedBooks {
      bookId
      title
      description
      image
      authors
      }
    }

    
  }
`;


export const REMOVE_BOOK = gql`
  mutation removeBook( $bookId: ID!) {
    removeBook(bookId: $bookId) {
    _id
    username
    email
   savedBooks {
      bookId
      title
      description
      image
      authors
      }
    }

    
  }
`;