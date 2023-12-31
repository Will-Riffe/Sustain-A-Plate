import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Logout from "./pages/logout/logout"; // Imported the logout component
import Profile from "./pages/profile/profile";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Restaurants from "./pages/restaurants/restaurants";
import Sustainability from "./pages/Sustainability/Sustainability"; // Imported the Sustainability component
import Contact from "./pages/contact/contact";
import RestaurantCards from "./components/restaurantCard/restaurantCards";
import FoodListings from "./components/foodListings/foodListings";
import Inventory from "./pages/Inventory/Inventory";
import About from "./pages/about/About";

import "./App.css"; // DO NOT DELETE ;P
import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.MONGODB_URI, // Replace with your GraphQL server endpoint
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [accountForm, setAccountForm] = useState("login");
  const changeAccountForm = (accountFormName) => {
    setAccountForm(accountFormName);
  };
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/food" element={<Restaurants />} />{" "}
              {/* Added a route for "/food" */}
              <Route
                path="/login"
                element={
                  accountForm === "login" ? (
                    <Login accountFormSwitch={changeAccountForm} />
                  ) : (
                    <Signup accountFormSwitch={changeAccountForm} />
                  )
                }
              />
              <Route path="/logout" element={<Logout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Sustainability" element={<Sustainability />} />
              <Route path="/foodListings" element={<FoodListings />} />
              <Route path="/:donorName" element={<Inventory />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <RestaurantCards />{" "}
          {/* Move the RestaurantCards component inside the <Routes> */}
          <Footer />
          {/*
                Sacred Space.
                Avoid violating the space
                under the footer unless
                absolutely necessary
              */}
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
