import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_FOODLISTINGS_BY_STORENAME } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { UPDATEFOODLISTING } from "../../utils/mutations";
import { DELETEFOODLISTING } from "../../utils/mutations";

export default function Panera() {
  const { loading, error, data } = useQuery(QUERY_FOODLISTINGS_BY_STORENAME, {
    variables: {
      donorname: "Panera",
    },
  });

  const [foodItem, SelectFoodItem] = useState("");
  const [quantity, SelectQuantity] = useState("");
  const [isClaimed, SelectIsClaimed] = useState("");

  const [UpdateFoodListing] = useMutation(UPDATEFOODLISTING);
  const [DeleteFoodListing] = useMutation(DELETEFOODLISTING);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.parentElement.innerHTML);
    const input = e.target.parentElement.innerHTML;
    const re = /[a-z0-9]{24}/;
    let theNeededId = input.match(re);
    console.log(theNeededId);
    try {
      const mutationResponse = await UpdateFoodListing({
        variables: {
          input: {
            id: theNeededId[0],
            isClaimed: true,
            quantity: 0,
          },
        },
      });
      console.log(mutationResponse);
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Panera's Food Listings</h2>
      <hr />
      {data.foodListingsByDonorName.map((listing) => (
        <div key={listing._id} onSubmit={handleSubmit}>
          <p>donor: {listing.donorname}</p>
          <p>Food ID: {listing._id}</p>
          <p>Food Item: {listing.foodItem}</p>
          <p>Description: {listing.description}</p>
          <p>Expiry Date: {listing.expiryDate}</p>
          <p>Quantity: {listing.quantity}</p>
          <p>Is Claimed: {listing.isClaimed ? "Yes" : "No"}</p>
          <button type="submit" onClick={handleSubmit}>
            Claim Inventory
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
