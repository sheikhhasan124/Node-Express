const express = require('express');
const app = express();
const PORT = 3000;



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html")
})
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/triangle.html")
})



app.listen(PORT,()=>{
     console.log(`server is runnig at:http://localhost:${PORT}`)
})