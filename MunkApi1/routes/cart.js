const router = require("express").Router();
const Cart = require("../Models/Cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart); 
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        
        res.status(200).json(updatedCart);

    } catch (err){
        res.status(500).json(err);
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET USER CART
//IN OUR PARAMS, WE ARE RETREIVING THE USER ID, NOT THE CART ID
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.id});
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ALL CARTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(err)
    }
})


module.exports = router