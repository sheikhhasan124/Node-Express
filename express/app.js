const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("i'm get requiest")
});
app.get("/about",(req,res)=>{
    res.send("i'm get requiest at about")
});

module.exports = app;