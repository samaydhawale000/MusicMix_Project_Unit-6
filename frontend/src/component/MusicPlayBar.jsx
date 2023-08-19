import React, { useEffect, useState } from "react";
import ReactH5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./component.css";



export default function MusicPlayBar({ songUrl, image, title,artist,id}) {
  console.log(image)

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        padding: "40px 30px 20px 30px",
        boxSizing: "borser-box",
        position: "fixed",
        bottom: "0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex:"10",
        borderTop:"1px solid rgb(37, 37, 37)"
      }}
    >
      <div
        style={{
          background: "black",
          width: "29%",
          height: "70px",
          objectFit: "cover",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {image !=undefined ? (
          <img
            src={image}
            alt="img"
            style={{ width: "70px", height: "100%",borderRadius:"5px" }}
          />
        ) : (
          <img
            src="https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg"
            alt="img"
            style={{ width: "70px", height: "100%",borderRadius:"5px" }}
          />
        )}

        <div style={{color:"#fff",background:"black", width:"78%",background:"black"}}>
            {title ? <h3 style={{background:"black",marginTop:"4px"}}>{title}</h3> : <h3 style={{marginTop:"4px",background:"black"}}>Voyage I - Waterfall</h3>}
            {artist ? <p  style={{fontSize:"13px" ,background:"black",marginTop:"20px"}}>{artist}</p> : <p style={{background:"black",fontSize:"13px", marginTop:"20px"}}>The Kyoto Connection</p>}
            </div>
      </div>
   {
    songUrl?<ReactH5AudioPlayer
    src={songUrl}
    autoPlay
    volume={0.6}
    progressJumpStep={5000}
    style={{
      backgroundColor: "black",
      color: "white",
      width: "60%",
      margin: "0 auto",
      backgroundColor: "#131313",
      padding: "16px 20px 16px 20px",
      borderRadius: "10px",
    }}
  />:
  <ReactH5AudioPlayer
        src={"https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/03_-_Voyage_I_-_Waterfall.mp3"}
        autoPlay
        volume={0.6}
        progressJumpStep={5000}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "62%",
          margin: "0 auto",
          backgroundColor: "#131313",
          padding: "16px 20px 16px 20px",
          borderRadius: "10px",
        }}
      />
   }
    </div>
  );
}
