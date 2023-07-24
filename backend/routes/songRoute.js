const SongModel = require("../model/songModel");
const songRouter = require("express").Router();
const admin = require("../middlewares/admin.middleware");
const auth = require("../middlewares/auth.middleware")
const validateObjectId = require("../middlewares/validateObjectId");
const UserModel = require("../model/userModel");
// const multer = require("multer");


// const imageStorage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, "./uploads/images")
//     },

//     filename: (req, file, cb) => {
//         // Set the filename to be used when saving the image
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// })
// const audioStorage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, "./uploads/audios")
//     },

//     filename: (req, file, cb) => {
//         // Set the filename to be used when saving the image
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// })

// const uploadImage = multer({ storage: imageStorage });
// const uploadAudio = multer({ storage: audioStorage });

///create song
songRouter.post("/upload", admin, async (req, res) => {
    try {
        const song = await SongModel(req.body).save();
        res.status(200).send({ data: song, msg: "Song created successfully" })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})


//get all song
songRouter.get("/", async (req, res) => {
    try {
        const songs = await SongModel.find();
        res.status(200).send({ data: songs })
    } catch (error) {

    }
})


//update songs

songRouter.put("/:id", [validateObjectId, admin], async (req, res) => {
    try {
        const song = await SongModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).send({ data: song, msg: "song updated succsessfully" })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

//delete song by ID

songRouter.delete("/:id", [validateObjectId, admin], async (req, res) => {
    try {
        await SongModel.findByIdAndDelete(req.params.id);
        res.status(200).send("Song deleted succsessfully")
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})


//like song
songRouter.put("/like/:id", [validateObjectId, auth], async (req, res) => {
    const { user } = req;
    try {
        let resMessage = "";
        const song = await SongModel.findById(req.params.id);
        if (!song) return res.status(400).send({ message: "Song does not exist" })

        const likedUser = await UserModel.findById(user._id);

        const index = likedUser.likedSongs.indexOf(song._id);

        if (index === -1) {
            likedUser.likedSongs.push(song._id);
            resMessage = "Added to your liked songs";
        } else {
            likedUser.likedSongs.splice(index, 1);
            resMessage = "Removed from your liked songs";
        }
        await likedUser.save();
        res.status(200).send({ message: resMessage })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


// Get liked songs
songRouter.get("/like", auth, async (req, res) => {
    const user = await UserModel.findById(req.user._id);
    const songs = await SongModel.find({ _id: user.likedSongs });
    res.status(200).send({ data: songs });
});

module.exports = songRouter