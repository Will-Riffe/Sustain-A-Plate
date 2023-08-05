import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_FOOD_LISTINGS = gql`
  query {
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

function FoodListings() {
  const { loading, error, data } = useQuery(GET_FOOD_LISTINGS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Food Listings</h2>
      {data.foodListings.map((listing) => (
        <div key={listing._id}>
          <p>Food Item: {listing.foodItem}</p>
          <p>Description: {listing.description}</p>
          <p>Expiry Date: {formatDate(listing.expiryDate, 'MM-dd-yy')}</p>
          <p>Quantity: {listing.quantity}</p>
          <p>Is Claimed: {listing.isClaimed ? 'Yes' : 'No'}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FoodListings;
