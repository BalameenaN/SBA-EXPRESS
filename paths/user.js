const express = require("express");
const router = express.Router();

const users = require("../data/user");
const error =require("../error");

router.get("/user",(req,res)=>{
    console.log("inside /user");
    res.json(users);
})

router.get("/user/:id",(req,res,next)=>{
    console.log("/user/id");
    let length = users.length;
    let ID = req.params.id;
    let filteredUser;
    if(ID <= length){
        filteredUser = users.filter((u)=> u.id == ID);
        res.json(filteredUser);
    }
    else next(error(404,"User Data not found"));
})



module.exports = router;