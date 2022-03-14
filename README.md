## express server runnig  
```
const express = require('express');
const app = express();
const PORT = 3000;
//server listen
app.listen(PORT, ()=>{
    console.log(`server is runnig at http://localhost:${PORT}`)
})

"start": "nodemon index.js"
```
![sf](./img/httpmethod.PNG)  
![sdf](./img/restfull%20api.PNG)

<hr>

### response json data, redirect  
```
router.get("/resister",(req,res)=>{
  /*   res.status(200).json({
        "name":"anisul",
        "message":"i am resister",
        statusCode:200,
        }) */

   /*  res.send("i'm get resister requiest");
    res.end(); */

    res.redirect("/login")
});
```
### response html file  
```
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

```

### query parameter  
```
app.get("/",(req,res)=>{
    // res.send("im home")
    const id = req.query.id;
    res.send(`student id is ${id}`)
})
```
### Route parameter  
```
app.get("/userId/:id/age/:age",(req,res)=>{
    // res.send("im home")
    const id = req.params.id;
    const age = req.params.age;
    res.send(`student id is ${id} and ${age}`)
})
```
### requist header  

```
app.get("/",(req,res)=>{
    // res.send("im home")
    const id = req.header('id');
    const name = req.header('name');
    res.send(`student id is ${id} and name ${name}`)
})

```