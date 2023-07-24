const mongoose = require("mongoose");


const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    source: { type: String, required: true },
    image: { type: String, required: true },
    duration: { type: Number, required: true },
})


const SongModel = mongoose.model("songs", songSchema)


module.exports = SongModel;