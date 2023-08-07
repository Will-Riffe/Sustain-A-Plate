import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_FOODLISTINGS_BY_STORENAME } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { UPDATEFOODLISTING } from "../../utils/mutations";
import { DELETEFOODLISTING } from "../../utils/mutations";
import AuthService from "../../utils/auth";
import "./Inventory.css";

export default function InventoryPage() {
  if (AuthService.loggedIn()) {
    window.location.replace("/login");
    return;
  } else if (!AuthService.loggedIn()) {
    const { donorName } = useParams();
    const { loading, error, data } = useQuery(QUERY_FOODLISTINGS_BY_STORENAME, {
      variables: {
        donorname: donorName,
      },
    });

    const [foodItem, SelectFoodItem] = useState("");
    const [quantity, SelectQuantity] = useState("");
    const [isClaimed, SelectIsClaimed] = useState("");

    const [UpdateFoodListing] = useMutation(UPDATEFOODLISTING);
    const [DeleteFoodListing] = useMutation(DELETEFOODLISTING);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const row = e.target.parentElement.parentElement;
      const id = row.querySelector("td:nth-child(2)").innerText;
      try {
        const mutationResponse = await UpdateFoodListing({
          variables: {
            input: {
              id: id,
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
      <div className="food-listings-container">
        <h2>{donorName}'s Food Listings</h2>
        <table className="food-listings-table">
          <thead>
            <tr>
              <th>Donor</th>
              <th>Food ID</th>
              <th>Food Item</th>
              <th>Description</th>
              <th>Expiry Date</th>
              <th>Quantity</th>
              <th>Is Claimed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.foodListingsByDonorName.map((listing) => (
              <tr key={listing._id}>
                <td>{listing.donorname}</td>
                <td>{listing._id}</td>
                <td>{listing.foodItem}</td>
                <td>{listing.description}</td>
                <td>
                  {new Date(Number(listing.expiryDate)).toLocaleDateString(
                    "en-US"
                  )}
                </td>
                <td>{listing.quantity}</td>
                <td>{listing.isClaimed ? "Yes" : "No"}</td>
                <td>
                  <button type="submit" onClick={handleSubmit}>
                    Claim Inventory
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.foodListingsByDonorName.map((listing) => (
          <div className="food-listing-card" key={listing._id}>
            <h3>{listing.foodItem}</h3>
            <p>Description: {listing.description}</p>
            <p>
              Expiry Date:{" "}
              {new Date(Number(listing.expiryDate)).toLocaleDateString("en-US")}
            </p>
            <p>Quantity: {listing.quantity}</p>
            <p>Is Claimed: {listing.isClaimed ? "Yes" : "No"}</p>
            <button type="submit" onClick={handleSubmit}>
              Claim Inventory
            </button>
          </div>
        ))}
      </div>
    );
  }
}
