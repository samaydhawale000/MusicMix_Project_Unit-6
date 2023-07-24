const mongoose = require("mongoose");

const validObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: "Invalid Id." })

    }
    next();
}


module.exports = validObjectId;