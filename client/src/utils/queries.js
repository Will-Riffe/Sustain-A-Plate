import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Users {
  users {
    _id
    username
    email
    password
  }
}
`;

export const QUERY_FOODLISTINGS = gql`
query FoodListings {
  foodListings {
    _id
    donorId
    foodItem
    description
    expiryDate
    quantity
    isClaimed
  }
}
`;

export const QUERY_TRANSACTIONS = gql`
query Transactions {
  transactions {
    _id
    donorId
    recipientId
    foodItemId
    timestamp
  }
}
`;

export const QUERY_TRANS_BY_ID = gql`
query FoodListing($foodListingId: ID!) {
  foodListing(id: $foodListingId) {
    _id
    donorId
    foodItem
    description
    expiryDate
    quantity
    isClaimed
  }
}
`;