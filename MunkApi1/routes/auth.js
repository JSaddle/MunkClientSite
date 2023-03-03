const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register", async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        //here, we use cryptojs docs (AES) to encrypt our password so that the User's pass is encrypted within our db
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try{
    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
    } catch(err){
        res.status(500).json(err);
        console.log(err)
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if (!user){
            return res.status(401).json("Wrong credentials!");
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password){
            return res.status(401).json("Wrong credentials!");
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC, {
            expiresIn: "3d"
        })

        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router