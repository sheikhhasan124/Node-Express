const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("i'm get requiest");
    res.end();
});
app.get("/resister",(req,res)=>{
    res.send("i'm get resister requiest");
    res.end();
});
app.get("/login",(req,res)=>{
    res.send("i'm get login requiest");
    res.end();
});

// wrong url message 
app.use((req,res)=>{
    res.send("404")
})


module.exports = app;