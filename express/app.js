const express = require('express');
const app = express();


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

// wrong url message 
app.use((req,res)=>{
    res.sendFile(__dirname+"/views/err.html")
})


module.exports = app;



// const userRouter = require("./routes/user-route");
// app.use("/api/user",userRouter);







   



