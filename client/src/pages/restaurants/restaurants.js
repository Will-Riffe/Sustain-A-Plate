import React from "react";
import RESTAURANTPICS from "../../assets/restaurant-templates/restaurantpics";
import RestaurantCards from "../../components/restaurantCard/restaurantCards";

export default function Restaurants() {
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
          margin-top: 5vh;
        }
      `}</style>
    </section>
  );
}
