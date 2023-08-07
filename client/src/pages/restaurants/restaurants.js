import React from "react";
import { Link } from "react-router-dom";
import RESTAURANTPICS from "../../assets/restaurant-templates/restaurantpics";
import RestaurantCards from "../../components/restaurantCard/restaurantCards";
import "./restaurants.css";

export default function Restaurants() {
  // Data for each restaurant
  const store = [
    {
      title: "Shoprite",
      image: RESTAURANTPICS.Shoprite,
      link: "/Shoprite",
    },
    {
      title: "BertsCafe",
      image: RESTAURANTPICS.LocalCafe,
      link: "/Berts Cafe",
    },
    {
      title: "Panera",
      image: RESTAURANTPICS.Panera,
      link: "/Panera",
    },
    {
      title: "Dunkin Donuts",
      image: RESTAURANTPICS.DunkinDonuts,
      link: "/Dunkin Donuts",
    },
    {
      title: "Wegmans",
      image: RESTAURANTPICS.Wegmans,
      link: "/Wegmans",
    },
    {
      title: "McArthur Pub",
      image: RESTAURANTPICS.LocalRestaurant,
      link: "/McArthur Pub",
    },
  ];

  return (
    <section className="restaurant-space">
      <div className="restaurantCard-sections">
        {store.map((restcard, index) => (
          <Link to={restcard.link} key={index}>
            <RestaurantCards {...restcard} />
          </Link>
        ))}
      </div>
    </section>
  );
}
