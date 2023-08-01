import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation loginUser($input: LoginInput!) {
    loginUser(input: $input) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation RegisterUser($input: RegisterInput!) {
    registerUser(input: $input) {
      token
    }
  }
`;
