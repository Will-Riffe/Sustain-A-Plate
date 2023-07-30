import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { endpoint } from "./config";

const httpLink = createHttpLink({
  uri: endpoint,
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
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
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;