import React, { useEffect,useState } from "react";
import axios from "axios"
import SongCard from "./SongCard";

export default function Songspage() {
    const [data,setData] = useState([])
    function getData(){
        axios.get("https://friendly-ant-helmet.cyclic.app/musixmix/songs")
        .then((res)=>{
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getData()
    },[])

    
  return (
    <div style={{ marginLeft:"20.5%", marginBottom:"155px", marginRight:"1%",color:"#fff", padding:"30px 20px 20px 20px",background:"black", borderRadius:"10px"}}>
      <h2>Best of what India listens to!</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", marginTop:"40px", gap:"30px 20px"}}>
          {
            data.map((e)=>{
              {console.log(e)}
               return  <SongCard songUrl={e.source} image={e.image} title={e.title} artist={e.artist} id={e._id}/>
            })
          }
      </div>
    </div>
  );
}
