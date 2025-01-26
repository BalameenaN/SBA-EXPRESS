const express = require("express");
const router = express.Router();

const product = require("../data/product");
const error =require("../error");

router.get("/product",(req,res)=>{
    console.log("inside /product");
    res.json(product);
})

router.get("/product/:id",(req,res,next)=>{
    console.log("/product/id");
    let length =(product).length;
    let ID = req.params.id;
    let filteredProduct;
    if(ID <= length){
        filteredProduct =(product).filter((u)=> u.id == ID);
        res.json(filteredProduct);
    }
    else next(error(404,"Product out of stock"));
})


module.exports = router;