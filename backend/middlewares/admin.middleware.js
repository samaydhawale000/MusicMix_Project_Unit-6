const jwt = require("jsonwebtoken");
require("dotenv").config();


const admin = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || null;
    try {
        if (!token) {
            return res.status(400).send({ message: "Access denied, no token provided" })
        }

        jwt.verify(token, process.env.PRIVATE_KEY, (err, validToken) => {
            if (err) return res.status(400).send({ message: "Invalid token" })
            else {
                if (!validToken.isAdmin) {
                    console.log(validToken.isAdmin)
                    return res.status(401).send({ message: "You don't hvae access to this" })
                }
                req.user = validToken;
                next();
            }
        })


    } catch (error) {
        res.status(500).send({ message: " Internal server error!" })
    }
}



module.exports = admin;