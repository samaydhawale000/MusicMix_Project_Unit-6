const mongoose = require("mongoose");

const blacklistSchema = mongoose.Schema({
    blacklist: { type: [String] }
})


const BlacklistModel = mongoose.model("blacklist", blacklistSchema);

module.exports = BlacklistModel