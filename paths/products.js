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
router.patch("/product/update/:id",(req,res)=>{
    console.log("inside product/update");
        const updatedProd = product.find((u, i) => {
          if (u.id == req.params.id) {
            for (const key in req.body) {
              product[i][key] = req.body[key];
            }
            return true;
          }
        });
        console.log(updatedProd);
        if (updatedProd) res.json("Product price is updated successfully",updatedProd);
        else next();

})

module.exports = router;