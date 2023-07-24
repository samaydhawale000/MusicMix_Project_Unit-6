const mongoose = require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken")
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    likedSongs: { type: [String], default: [] },
    playlists: { type: [String], default: [] },
    isAdmin: { type: Boolean, default: false },

})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, name: this.name, isAdmin: this.isAdmin },
        process.env.PRIVATE_KEY,
        { expiresIn: "7d" }
    );
    return token;
};

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel;
