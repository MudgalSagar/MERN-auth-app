import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Auth.css";
const Registrationpage = () => {
  const [RegistrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const handleregistrationpage = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleregistrationsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        RegistrationData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Registration:</h1>
      <form onSubmit={handleregistrationsubmit}>
        <input
          type="text"
          name="username"
          value={RegistrationData.username}
          placeholder="username"
          onChange={handleregistrationpage}
          required
        ></input>

        <input
          type="password"
          name="password"
          value={RegistrationData.password}
          placeholder="password"
          onChange={handleregistrationpage}
          required
        ></input>
        <button type="submit">Register</button>
        <p>
          Already Registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Registrationpage;
