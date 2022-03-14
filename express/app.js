const express = require('express');
const app = express();
const userRouter=require("./routes/user.route")

// app.use("/api/user",userRouter);
app.use(userRouter);


//home route
app.get("/",(req,res)=>{
    // res.send("i'm home page")
    res.statusCode=200;
    res.sendFile(__dirname+"/views/index.html")
})
app.get("/contact",(req,res)=>{
    // res.send("i'm contact page")
    res.statusCode=200;
    res.sendFile(__dirname+"/views/contact.html")
})
app.use("/login",(req,res)=>{
    // res.cookie("name","hasan")
    res.clearCookie("name")
    res.append("id", 122222)
    res.end();
})

// wrong url message 
app.use((req,res)=>{
    res.sendFile(__dirname+"/views/err.html")
})


module.exports = app;








   



