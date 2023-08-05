import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FOODLISTINGS_BY_STORE } from '../../utils/queries';


function FoodListings() {
  const { loading, error, data } = useQuery(QUERY_FOODLISTINGS_BY_STORE, {
    variables: {
      donorId: "64cd7cead3c47624c798b7c4"
    }
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Food Listings</h2>
      {data.foodListingsByDonorId.map((listing) => (
        <div key={listing._id}>
          <p>donor Id:{listing.donorId}</p>
          <p>Food Item: {listing.foodItem}</p>
          <p>Description: {listing.description}</p>
          <p>Expiry Date: {listing.expiryDate}</p>
          <p>Quantity: {listing.quantity}</p>
          <p>Is Claimed: {listing.isClaimed ? 'Yes' : 'No'}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FoodListings;
