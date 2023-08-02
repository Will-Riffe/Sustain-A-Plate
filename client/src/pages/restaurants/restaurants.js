import React, { useState } from "react";
// import transHistory from '../../components/transactions';
import RESTAURANTPICS from "../../assets/restaurant-templates/restaurantpics";
import RestaurantCards from "../../components/restaurantCard/restaurantCards";

export default function Restaurants() {
  const [store] = useState([
    {
      title: "Berts Cafe",
      image: RESTAURANTPICS.LocalCafe,
      link: "/",
    },
    {
      title: "ShopRite",
      image: RESTAURANTPICS.Shoprite,
      link: "/",
    },
    {
      title: "Panera",
      image: RESTAURANTPICS.Panera,
      link: "/",
    },
    {
      title: "Dunkin Donuts",
      image: RESTAURANTPICS.DunkinDonuts,
      link: "/",
    },
    {
      title: "Wegmans",
      image: RESTAURANTPICS.Wegmans,
      link: "/",
    },
    {
      title: "McArthur Pub",
      image: RESTAURANTPICS.LocalRestaurant,
      link: "/",
    },
  ]);
  return (
    <section className="restaurant-space">
      <div className="restaurantCard-sections">
        {store.map((restcard, index) => (
          <RestaurantCards key={index} {...restcard} />
        ))}
      </div>
    </section>
  );
}
