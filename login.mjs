//jshint esversion:6
import fs from "fs";
import express from "express";
import bodyparser from "body-parser";
import axios from "axios";


const app=express();

app.set("view engine","ejs");
app.set("views",process.cwd()+"/views");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/login",(req,res) => {
  res.render("login.ejs");
});





//this is to add people to the mailing list
app.post("/",(req,res) => {
  console.log(req.body);

  var data= {
    "emails":[{"email":req.body.email,"variable": {
      "name":req.body.name,
       "phonenumber":req.body.phonenumber
    }}]
  };
}
);




app.get("/home",(req,res) => {
  res.render("home.ejs");
});


app.get("/about",(req,res) => {
  res.render("about.ejs");
});


app.get("/form",(req,res) => {
  res.render("form.ejs");
});


app.get("/output",(req,res) => {
  res.render("output.ejs");
});


app.listen(3000,(err) => {
  if(err) {
    console.log("sorry the server cant be set up");
  }
  else{
      console.log("your server is set");
  }

});
