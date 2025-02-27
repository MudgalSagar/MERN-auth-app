import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Loginpagestyle.css";

const Loginpage = () => {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  const handleloginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;

      if (success) {
        console.log("login succesfully");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error("login error", error);
    }
    setloginData({
      username: "",
      password: "",
    });
  };
  const handlelogin = (e) => {
    const { name, value } = e.target;

    setloginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <form onSubmit={handleloginSubmit}>
        <h1>Login:</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={loginData.username}
          onChange={handlelogin}
          required
        ></input>

        <input
          type="password"
          name="password"
          placeholder="password"
          value={loginData.password}
          onChange={handlelogin}
          required
        ></input>
        <button type="submit">Submit</button>
        <p>
          If not registered <Link to="/register">Registration</Link>
        </p>
      </form>
    </div>
  );
};

export default Loginpage;
