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

export const UPDATEFOODLISTING = gql`
mutation UpdateFoodListing($input: UpdateFoodListingInput) {
  updateFoodListing(input: $input) {
    foodItem
  }
}
`;

export const CREATEFOODLISTING = gql`
mutation CreateFoodListing($input: CreateFoodListingInput) {
  createFoodListing(input: $input) {
    foodItem
  }
}
`;

export const DELETEFOODLISTING = gql`
mutation DeleteFoodListing($deleteFoodListingId: ID!) {
  deleteFoodListing(id: $deleteFoodListingId) {
    foodItem
  }
}
`;