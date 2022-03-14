
const app =require('./app')
const PORT = 3000;


// qequist with queiry parameter 

/* app.get("/",(req,res)=>{
    // res.send("im home")
    const id = req.query.id;
    res.send(`student id is ${id}`)
}) */

// requist with params parameter 
/* app.get("/userId/:id/age/:age",(req,res)=>{
    // res.send("im home")
    const id = req.params.id;
    const age = req.params.age;
    res.send(`student id is ${id} and ${age}`)
}) */
// requist with params parameter 
/* app.get("/",(req,res)=>{
    // res.send("im home")
    const id = req.header('id');
    const name = req.header('name');
    res.send(`student id is ${id} and name ${name}`)
})
 */
// requist with json data / form data parameter 
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user",(req,res)=>{
 const name = req.body.name;
 const age = req.body.age;
 res.send(`student name is ${name} and age is ${age}`)
})


app.listen(PORT,()=>{
    console.log(`server is running at:http://localhost:${PORT}`)
})
