const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const playlistSchema = mongoose.Schema({
    name: { type: String, required: true },
    user: { type: ObjectId, ref: "user", required: true },
    desc: { type: String },
    songs: { type: Array, default: [] },
    img: { type: String },
})


const PlaylistModel = mongoose.model("playlist", playlistSchema);

module.exports = PlaylistModel;