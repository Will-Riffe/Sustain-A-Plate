import React from "react";
import { useQuery } from "@apollo/client";
import RESTAURANTPICS from "../../assets/restaurant-templates/restaurantpics";
import RestaurantCards from "../../components/restaurantCard/restaurantCards";
import { QUERY_FOODLISTINGS } from "../../utils/queries";

export default function Restaurants() {
  // Execute the QUERY_FOODLISTINGS query using useQuery
  const { loading, error, data } = useQuery(QUERY_FOODLISTINGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const foodListings = data.foodListings;

  // Data for each restaurant
  const store = [
    {
      title: "Shoprite",
      image: RESTAURANTPICS.Shoprite,
      link: "/Shoprite",
    },
    {
      title: "Berts Cafe",
      image: RESTAURANTPICS.LocalCafe,
      link: "/donorInventory",
    },
    {
      title: "Panera",
      image: RESTAURANTPICS.Panera,
      link: "/donorInventory",
    },
    {
      title: "Dunkin Donuts",
      image: RESTAURANTPICS.DunkinDonuts,
      link: "/donorInventory",
    },
    {
      title: "Wegmans",
      image: RESTAURANTPICS.Wegmans,
      link: "/donorInventory",
    },
    {
      title: "McArthur Pub",
      image: RESTAURANTPICS.LocalRestaurant,
      link: "/donorInventory",
    },
  ];

  return (
    <section className="restaurant-space">
      <div className="restaurantCard-sections">
        {store.map((restcard, index) => (
          <RestaurantCards key={index} {...restcard}>
            {/* Filter the food listings for the current restaurant */}
            {foodListings
              .filter((listing) => listing.donorId === restcard.title)
              .map((listing) => (
                <div key={listing._id}>
                  <h3>{listing.foodItem}</h3>
                  <p>Description: {listing.description}</p>
                  <p>Expiry Date: {listing.expiryDate}</p>
                  <p>Quantity: {listing.quantity}</p>
                </div>
              ))}
          </RestaurantCards>
        ))}
      </div>
      <style jsx>{`
        h3 {
          font-size: 1.5rem;
          color: var(--textColor);
        }
        
        img {
          width: 15vw;
          height: auto;
          margin-top:5vh;
        }
      `}</style>
    </section>
  );
}
