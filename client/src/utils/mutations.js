import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation loginUser($input: LoginInput!) {
    loginUser(input: $input) {
      token
      userId
    }
  }
`;

export const REGISTER = gql`
  mutation registerUser($input: RegisterInput!) {
    registerUser(input: $input) {
      token
      userId
    }
  }
`;
