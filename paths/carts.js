const express = require("express");
const router = express.Router();

const carts = require("../data/cart");
const error = require("../error");

router.get("/cart", (req, res) => {
    console.log("inside /cart");
    res.json(carts);
})

router.get("/cart/:id", (req, res, next) => {
    console.log("/cart/id");
    let length = carts.length;
    let ID = req.params.id;
    let filteredcart;
    if (ID <= length) {
        filteredcart = carts.filter((u) => u.id == ID);
        res.json(filteredcart);
    }
    else next(error(404, "Cart Data not found"));
})

router.delete("/cart/delete/:id", (req, res) => {
    console.log("/cart/delete");
    let Id = req.params.id;
    const cart = carts.find((u, i) => {
        if (u.id == req.params.id) {
            carts.splice(i, 1);
            return true;
        }
    });

    if (cart) res.json("deleted the cart item:");
    else next();
})

module.exports = router;