import React from "react";
import logo from "../images/logo.png";
import "./component.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({handleChange}) {
  return (
    <div
      style={{
        width: "19.5%",
        background: "black",
        height: "560px",
        padding: "20px 20px 0px 20px",
        baxSizing: "border-box",
        position: "fixed",
        borderRadius: "10px",
        marginTop:"0px"
      }}
    >
      <div className="logoDiv">
        <img src={logo} alt="logo" />
        <h1 class="text-3xl font-bold" >
          Music<span style={{ color: "#1DB954" }}>Mix</span>
        </h1>
      </div>
      <div className="linkDiv">
        <input  className ="w-70 h-10 rounded-md border border-gray-400 px-4 bg-black text-white " type="text" placeholder="Search Songs" onChange={(e)=>{handleChange(e.target.value)}} />
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
