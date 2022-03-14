const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("i'm get requiest");
    res.end();
});
app.get("/about",(req,res)=>{
    res.send("i'm get requiest at about");
    res.end();
});
app.post("/",(req,res)=>{
    res.send("i'm post requiest ");
    res.end();
});
app.put("/",(req,res)=>{
    res.send("i'm post requiest ");
    res.end();
});
app.delete("/",(req,res)=>{
    res.send("i'm post requiest ")
    res.end();
});

module.exports = app;