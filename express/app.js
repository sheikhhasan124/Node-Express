const express = require('express');
const app = express();
const userRouter = require("./routes/user-route");
app.use("/api/user",userRouter);



//home route
app.use("/",(req,res)=>{
    res.send("i'm get requiest");
    res.end();
});

// wrong url message 
app.use((req,res)=>{
    res.send("404")
})


module.exports = app;