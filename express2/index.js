
const app =require('./app')
const PORT = 3000;


// qequist with queiry parameter 
/* app.get("/",(req,res)=>{
    // res.send("im home")
    const id = req.query.id;
    res.send(`student id is ${id}`)
}) */
app.get("/userId/:id/age/:age",(req,res)=>{
    // res.send("im home")
    const id = req.params.id;
    const age = req.params.age;
    res.send(`student id is ${id} and ${age}`)
})


app.listen(PORT,()=>{
    console.log(`server is running at:http://localhost:${PORT}`)
})
