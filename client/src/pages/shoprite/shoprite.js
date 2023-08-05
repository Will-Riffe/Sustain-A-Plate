import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_FOODLISTINGS_BY_STORE } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { UPDATEFOODLISTING } from '../../utils/mutations';
import { DELETEFOODLISTING } from '../../utils/mutations';

export default function Shoprite() {
  const { loading, error, data } = useQuery(QUERY_FOODLISTINGS_BY_STORE, {
    variables: {
      donorId: "64cd7cead3c47624c798b7c4"
    }
  });

  const [foodItem, SelectFoodItem] = useState('');
  const [quantity, SelectQuantity] = useState('');
  const [isClaimed, SelectIsClaimed] = useState('');

  const [UpdateFoodListing] = useMutation(UPDATEFOODLISTING);
  const [DeleteFoodListing] = useMutation(DELETEFOODLISTING); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await UpdateFoodListing({
        variables: {
          input: {
            foodItem: foodItem,
            quantity: quantity,
            isClaimed: isClaimed
          },
        },
      });

    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Food Listings</h2>
      {data.foodListingsByDonorId.map((listing) => (
        <div key={listing._id} onSubmit={handleSubmit}>
          <p>donor Id:{listing.donorId}</p>
          <p>Food Item: {listing.foodItem}</p>
          <p>Description: {listing.description}</p>
          <p>Expiry Date: {listing.expiryDate}</p>
          <p>Quantity: {listing.quantity}</p>
          <p>Is Claimed: {listing.isClaimed ? 'Yes' : 'No'}</p>
          <button type="submit">Claim Inventory</button>
          <hr />
        </div>
      ))}
    </div>
  );
}


