const router = require('express').Router();
const PlaylistModel = require("../model/playlistModel");
const SongModel = require("../model/songModel");
const UserModel = require("../model/userModel");
const auth = require("../middlewares/auth.middleware");
const validObjectId = require("../middlewares/validateObjectId");


router.use(auth);
//create plyalist 
router.post("/", async (req, res) => {
    const { user } = req;
    try {
        const foundUser = await UserModel.findById(user._id);
        const playlist = await PlaylistModel({ ...req.body, user: user._id }).save();
        foundUser.playlists.push(playlist._id);
        await foundUser.save();
        res.status(200).send({ data: playlist })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})




//edit playlist by id 
router.put("/edit/:id", validObjectId, async (req, res) => {
    const { id } = req.params;
    const { user } = req;
    //send name desc and img in the body
    const { name, desc, img } = req.body;
    try {
        const playlist = await PlaylistModel.findById(id);
        if (!playlist) return res.status(400).send({ message: "Playlist not found" })


        const foundUser = await UserModel.findById(user._id);
        if (!foundUser._id.equals(playlist.user))
            return res.status(403).send({ message: "User don't have access to edit!" });

        playlist.name = name;
        playlist.desc = desc;
        playlist.img = img;
        await playlist.save()

        res.status(200).send({ message: "Updated successfully" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

//add song in playlist
router.put("/add-song", async (req, res) => {
    //send playlist id and songId in the body
    const { user } = req;
    try {
        const foundUser = await UserModel.findById(user._id)
        const playlist = await PlaylistModel.findById(req.body.playlistId);
        if (!foundUser._id.equals(playlist.user))
            return res.status(403).send({ message: "User don't have access to add!" });

        if (playlist.songs.indexOf(req.body.songId) === -1) {
            playlist.songs.push(req.body.songId)
        }


        await playlist.save();
        res.status(200).send({ data: playlist, message: "Song added successfully" })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


//remove song from playlist
router.put("/remove-song", async (req, res) => {
    //send playlist id and songId in the body
    const { user } = req;
    const { playlistId, songId } = req.body
    try {
        const foundUser = await UserModel.findById(user._id);
        const playlist = await PlaylistModel.findById(playlistId);

        if (!foundUser._id.equals(playlist.user))
            return res
                .status(403)
                .send({ message: "User don't have access to Remove!" });

        const index = playlist.songs.indexOf(songId);
        playlist.songs.splice(index, 1);
        await playlist.save();
        res.status(200).send({ data: playlist, message: "Removed from playlist" })

    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})

//user playlists
router.get("/favourite", async (req, res) => {
    const { user } = req;
    try {
        const foundUser = await UserModel.findById(user._id);
        const playlist = await PlaylistModel.find({ _id: foundUser.playlists })
        res.status(200).send({ data: playlist })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})

//get all playlists
router.get("/", async (req, res) => {
    const playlists = await PlaylistModel.find();
    res.status(200).send({ data: playlists })
})


module.exports = router;