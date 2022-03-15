const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html")
})
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/triangle.html")
})
app.post("/triangle",(req,res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5 * base * height;
    res.send(`<h2>area of triangle : ${area}</h2>`)
})
app.post("/circle",(req,res)=>{
    const radious = req.body.radious;
    
    const area = Math.PI * radious * radious;
    res.send(`<h2>area of triangle : ${area}</h2>`)
})


app.listen(PORT,()=>{
     console.log(`server is runnig at:http://localhost:${PORT}`)
})