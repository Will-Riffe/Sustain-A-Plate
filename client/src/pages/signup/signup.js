import React, { useState } from "react";
import "./signup.css";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../utils/mutations";
import AuthService from "../../utils/auth";

export default function Signup(props) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [registerUser] = useMutation(REGISTER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await registerUser({
        variables: {
          input: {
            username: username,
            email: email,
            password: password,
          },
        },
      });

      const token = mutationResponse.data.registerUser.token;
      // console.log(mutationResponse.data.registerUser.token)
      AuthService.login(token);
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <div className="signup-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="example@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="***********"
          id="password"
          name="password"
        />
        <button type="submit">Sign Up!</button>
      </form>
      <button
        className="state-change-btn"
        onClick={() => props.accountFormSwitch("login")}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
}
