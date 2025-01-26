const express = require("express");
const router = express.Router();

const carts = require("../data/cart");
const error =require("../error");

router.get("/cart",(req,res)=>{
    console.log("inside /cart");
    res.json(carts);
})

router.get("/cart/:id",(req,res,next)=>{
    console.log("/cart/id");
    let length = carts.length;
    let ID = req.params.id;
    let filteredcart;
    if(ID <= length){
        filteredcart = carts.filter((u)=> u.id == ID);
        res.json(filteredcart);
    }
    else next(error(404,"Cart Data not found"));
})

module.exports = router;