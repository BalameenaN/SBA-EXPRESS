const express = require("express");
const bodyParser = require("body-parser");

//creating app constant that holds all express functions
const app = express();
const port = 5000;
const users = require("./paths/user");
const products = require("./paths/products");
const carts = require("./paths/carts");

//body-parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Including the path files here to access it
app.use(users);
app.use(products);
app.use(carts);

//setting the view engine
app.set("view engine", "ejs");

//homepage
app.get("/",(req,res)=>{
    console.log("inside /");
    res.render("home");
});

//login page using ejs view
app.get("/login",(req,res)=>{
    res.render("login");
})

//sign-up page using ejs
app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.get("/details",(req,res)=>{
    console.log("inside /details");
    let details=`<ul>LIST OF DETAILS AVAILABLE<br>
    <li>USER Detail</li>
    <li>CART Detail</li>
    <li>PRODUCT detail</li>
    <li>REVIEW detail</li></ul>`;
    res.send(details);
})
//error handling middleware which is executed when next function is passed with error as argument
app.use((err, req, res, next) => {
    console.log("inside error middleware");
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

//listen function to make the server up and running
app.listen(port,()=>{
    console.log(`Server is running successfully in port:${port}`);
});