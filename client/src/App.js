import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Logout from "./pages/logout/logout"; // Import the logout component
import Profile from "./pages/profile/profile";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Restaurants from "./pages/restaurants/restaurants";
import "./App.css";
import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: '/graphql',
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
              <Route path="/food" element={<Restaurants />} />
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
              <Route path="/logout" element={<Logout />} /> {/* Add a route for logout */}
            </Routes>
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
