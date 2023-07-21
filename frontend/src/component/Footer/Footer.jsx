import React from "react";
import logo from "../Header/Kimberly Nguyen.png"
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import "../Footer/Footer.css"

export const Footer = () => {
  return (
   <>
   <footer>
   <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em"
            }}
          >
           <img src={logo} alt="logo" style={{width:"100px"}} />
          </h3>
          <p id="ex">EXPERIENCE MUSICMIX APP ON MOBILE</p>
          <div className="play">
          <div >
            <img src="https://www.licious.in/image/rebranding/png/app-store-homepage.png" alt="Appstore" />
          </div>
          <div>
            <img src="https://www.licious.in/image/rebranding/png/playstore-homepage.png" alt="" />
          </div>
          </div>
          <div className="sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Jobs</p>
              <p>For the Record</p>
            </div>
            <div>
             <b id="ex">USEFUL LINKS</b>
              <ul className="li">
                <li>Support</li>
                <li>Free Mobile App</li>
              </ul>
            </div>
             <ul className="li">
                <b>Communities</b>
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
                <li>Spotify for Work</li>
                <li>Sitemap</li>
             </ul>
          
            <div>
              <b>Social links</b>
              <div className="so">
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
                <AiFillApple />
                <FaGooglePlay />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   </footer>
   </>
  );
};
