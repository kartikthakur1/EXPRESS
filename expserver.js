const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the home page<h1>");
})
app.get("/about",(req,res)=>{
    res.send("This is the about page");
})
app.get("/contactus",(req,res)=>{
    res.send("This is the contact us page sdf");
})
app.get("/calculator",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/calculator",(req,res)=>{
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    // console.log(n1+n2);
    let sum = n1+n2;
    let ans = sum.toString();
    res.send(ans);
})

app.listen(3000,(req,res)=>{
    console.log("Server Running");
}); 