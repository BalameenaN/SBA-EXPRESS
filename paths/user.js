const express = require("express");
const router = express.Router();

const users = require("../data/user");

router.get("/user",(req,res)=>{
    console.log("inside /user");
    res.json(users);
})

router.get("/user/:id",(req,res)=>{
    console.log("/user/id");
    let ID = req.params.id;
    let filteredUser = users.filter((u)=> u.id == ID);
    res.json(filteredUser);
})

module.exports = router;