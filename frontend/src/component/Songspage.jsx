import React, { useEffect, useState } from "react";
import axios from "axios";
import SongCard from "./SongCard";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Songspage({ search }) {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
console.log(search)
  function getData() {
    setisLoading(true);

    !search
      ? axios
          .get("https://frightened-baseball-cap-fish.cyclic.app/musixmix/songs")
          .then((res) => {
            setData(res.data.data);
            setisLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setisLoading(false);
          })
      : axios
          .get(
            `https://frightened-baseball-cap-fish.cyclic.app/musixmix?search=${search}`
          )
          .then((res) => {
            setData(res.data.songs);
            console.log(res.data.songs)
            setisLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setisLoading(false);
          });
  }
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div
      style={{
        marginLeft: "20.5%",
        marginBottom: "155px",
        marginRight: "1%",
        color: "#fff",
        padding: "30px 20px 20px 20px",
        background: "black",
        borderRadius: "10px",
      }}
    >
      <h2 class="text-2xl font-semibold">Best of what India listens to!</h2>
      {isLoading ? (
        <h2 style={{ textAlign: "center", margin: "150px", color: "#1DB954" }}>
          Loading...
        </h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            marginTop: "40px",
            gap: "30px 20px",
          }}
        >
          {data && data.map((e) => {
            
            return (
              <SongCard
                songUrl={e.source}
                image={e.image}
                title={e.title}
                artist={e.artist}
                id={e._id}
              />
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}
