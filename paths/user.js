const express = require("express");
const router = express.Router();

const users = require("../data/user");
const error =require("../error");

router.get("/user",(req,res)=>{
    console.log("inside /user");
    res.json(users);
})
.post("/user",(req,res)=>{
    console.log("inside / POST");
    if(req.body.name && req.body.email && req.body.userName && req.body.phoneNo){
        if (users.find((u) => u.username == req.body.username)) {
            next(error(409, "Username Already Taken"));
          }
          let length = users.length;
          const user=  {
            id: length+1,
            name: req.body.name,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            userName:  req.body.userName
          }
          
          users.push(user);
          res.json(users[users.length-1]);
    }else next(error(400, "Insufficient Data"));
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