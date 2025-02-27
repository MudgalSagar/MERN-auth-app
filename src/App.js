import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Loginpage from "./Loginpage";
import Registrationpage from "./Registrationpage";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <div className="content">
          <Routes>
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registrationpage />} />
            <Route
              path="/"
              element={<h1>Welcome! Choose Login or Register</h1>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
