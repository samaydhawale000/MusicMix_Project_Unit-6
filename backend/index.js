require("express-async-errors");
const express = require("express");
const cors = require("cors")
const DBconnection = require("./config/db");
const userRoutes = require("./routes/userRoute");
const songRoutes = require("./routes/songRoute");
const playlistRoutes = require("./routes/playlist.route");
const searchRoutes = require("./routes/search.route");


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/musixmix/users", userRoutes);
app.use("/musixmix/songs", songRoutes);
app.use("/musixmix/playlists", playlistRoutes);
app.use("/musixmix", searchRoutes)


app.get("/", async (req, res) => {
  res.json({ msg: "welcome Music Mix backend", Routes: `${"/musixmix/users/" + "\n"} ${"/musixmix/login/" + "\n"} ${"/musixmix/songs/" + "\n"}  ${"/musixmix/playlists/" + "\n"}  ${"/musixmix/", "for search" + "\n"}` });
});


app.listen(8080, async () => {
  await DBconnection
  console.log("DB connected");
  console.log("Server is running on port 8080");
});

