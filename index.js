const express = require("express");
const bodyParser = require("body-parser");

//creating app constant that holds all express functions
const app = express();
const port = 5000;
const users = require("./paths/user");

//body-parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Route middleware
app.use(users);


//homepage
app.get("/",(req,res)=>{
    console.log("inside /");
    res.send(`<h1>Welcome to E-commerce API store</h1><p><a href="/details">CLICK HERE</a> to know the different paths</p>` );
});

app.get("/details",(req,res)=>{
    console.log("inside /details");
    let details=`<ul>LIST OF DETAILS AVAILABLE<br>
    <li>USER Detail</li>
    <li>CART Detail</li>
    <li>PRODUCT detail</li>
    <li>REVIEW detail</li></ul>`;
    res.send(details);
})

//listen function to make the server up and running
app.listen(port,()=>{
    console.log(`Server is running successfully in port:${port}`);
});