import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 import logo from "./Kimberly Nguyen.png"
const Header = () => {
  const [keyword, setKeyWord] = useState("");
  const [res, setRes] = useState([]);
  const navigate = useNavigate();
  const push = () => {
    navigate("/");
  };

  const searchFunc = (e) => {
    if (keyword === "") {
      toast("Please type something to search");
      return;
    }
    navigate(`/search/${keyword}`);
  };

  const logoutTrigger = async () => {
    try {
      const { data } = await axios.post("/api/v1/logout");
      toast("Logged out successfully");
      navigate("/");
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main_header" >
      
      <div className="left">
        
        <img
          src={logo}
          alt="Your Logo"
          onClick={push}
          style={{ cursor: "pointer" }}
        />
         <span style={{fontSize:"35px"}}>MusicMix</span>
      </div>
      <div className="right">
        <div className="search_bar">
          <div className="bar">
            <input
              type="text"
              id="search-bar"
              value={keyword}
              onChange={(e) => {
                setKeyWord(e.target.value);
              }}
            />
            <SearchIcon onClick={searchFunc} />
          </div>
          <div className="results">
            {res?.map?.((song, key) => (
              <div key={key}>
                <img src="" alt="Song Image" />
                <p>{song?.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="menu_options">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trending">Trending</NavLink>
          <NavLink to="/latest">Latest</NavLink>
          <NavLink to="/favourites">Favourites</NavLink>
        </div>
        <div className="account_section">
          {/* You can add your login functionality here */}
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
