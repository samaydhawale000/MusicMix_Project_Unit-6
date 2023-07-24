const router = require("express").Router();
const SongModel = require("../model/songModel");
const playlist = require("../model/playlistModel");

router.get("/", async (req, res) => {
    const search = req.query.search;
    console.log(search)
    try {
        if (search !== "") {
            const songs = await SongModel.find({
                title: { $regex: search, $options: "i" },
            }).limit(10);
            const playlists = await playlist.find({
                name: { $regex: search, $options: "i" },
            }).limit(10);
            const result = { songs, playlists };
            res.status(200).send(result);
        } else {
            res.status(200).send({});
        }
    } catch (error) {
        res.status(400).send({ message: error })
    }
})


module.exports = router;
