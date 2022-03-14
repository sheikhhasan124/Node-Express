
const app =require('./app')
const PORT = 3000;

app.get("/",(req,res)=>{
    // res.send("im home")
    const id = req.query.id;
    res.send(`student id is ${id}`)
})


app.listen(PORT,()=>{
    console.log(`server is running at:http://localhost:${PORT}`)
})
