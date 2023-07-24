const router = require("express").Router();
const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const admin = require("../middlewares/admin.middleware");
const auth = require("../middlewares/auth.middleware");
const validateObjectId = require("../middlewares/validateObjectId");
const BlacklistModel = require("../model/blacklistModel");
require("dotenv").config();


//create user
router.post("/register", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await UserModel.findOne({ email })
    if (user) {
      return res.status(402).send({ message: "User already exits with given email" })
    }


    const salt = await bcrypt.genSalt(Number(process.env.SALT))
    const hashedPassword = await bcrypt.hash(password, salt)

    let newUser = await new UserModel({
      ...req.body,
      password: hashedPassword
    }).save();

    res.status(200).send({ data: newUser, message: "User created successfully" })
  } catch (error) {

  }
})


router.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "Invalid email and passoword" })
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send({ message: "Invalid password" })
    }

    const token = user.generateAuthToken();
    res.status(200).send({ message: "Login sucsessfull!", token })

  } catch (error) {
    res.status(500).send({ message: "Internal server error" })
  }
})

router.post("/logout", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      await BlacklistModel.updateMany({ $push: { blacklist: [token] } });
      res.status(200).send({ msg: "Logout sucsessfull" })
    }
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})


//get all users
router.get("/", admin, async (req, res) => {
  try {
    const users = await UserModel.find()
    res.status(200).send({ data: users })
  } catch (error) {
    res.status(400).send({ message: error })
  }
})



// get user by id
router.get("/:id", [validateObjectId, auth], async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).select("-password -__v");
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send(error)
  }
});

// update user by id
router.put("/:id", [validateObjectId, auth], async (req, res) => {
  const user = await UserModel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).send({ data: user, message: "Profile updated successfully" });
});

// delete user by id
router.delete("/:id", [validateObjectId, admin], async (req, res) => {
  await UserModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Successfully deleted user." });
});


module.exports = router


// const registerMiddle = require("../middlewares/auth.middleware");
// const userModel = require("../model/userModel");
// const bcrypt = require("bcrypt");
// var jwt = require('jsonwebtoken');

// const userRoute = require("express").Router();

// userRoute.post("/register", async (req, res) => {
//   const { name, email, password, gender } = req.body;
//   try {
//     let findUser = await userModel.findOne({ email });

//     if (findUser) {
//       res.json({ msg: "User has already registered please login" });
//     }

//     bcrypt.hash(password, 5, async (err, hash) => {
//       if (hash) {
//         const data = await userModel.create({
//           name,
//           email,
//           password: hash,
//           gender
//         });
//         res.json({ msg: "User register successfully", user: data });
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });


// userRoute.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     let findUser = await userModel.findOne({ email });

//     if (findUser) {
//       bcrypt.compare(password, findUser.password, function (err, result) {
//         if (result) {
//           var token = jwt.sign({ userId: findUser._id }, 'music');
//           res.json({ msg: "User login succesfully", token })
//         }
//         else {
//           res.json({ msg: "Wrong password please enter valid password to login" })
//         }
//       });
//     }
//     else {
//       res.json({ msg: "Wrong email and password !" })
//     }

//   } catch (err) {
//     console.log(err);
//   }
// });

// module.exports = userRoute;
