import React from "react";
import logo from "../images/logo.png";
import "./component.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        width: "19.5%",
        background: "black",
        height: "585px",
        padding: "20px 20px 0px 20px",
        baxSizing: "border-box",
        position: "fixed",
        borderRadius: "10px",
      }}
    >
      <div className="logoDiv">
        <img src={logo} alt="logo" />
        <h1>
          Music<span style={{ color: "#1DB954" }}>Mix</span>
        </h1>
      </div>
      <div className="linkDiv">
        <input type="text" placeholder="Search Songs" />
        <br />
        <NavLink
          to="/"
          className={({ isActive }) =>
          isActive ? "navLinksClick" : "navLinks" 
          }
        >
          Home
        </NavLink>
        <NavLink to="/library" className={({ isActive }) =>
          isActive ? "navLinksClick" : "navLinks" 
          }>
          Your Library
        </NavLink>
        <NavLink to="/login" className={({ isActive }) =>
          isActive ? "navLinksClick" : "navLinks" 
          }>
          Login
        </NavLink>
      </div>
    </div>
  );
}
