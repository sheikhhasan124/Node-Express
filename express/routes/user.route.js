const express = require('express');
const router = express.Router();

router.get("/serve",(req,res)=>{
    res.send("i'm serve page")
  
})

module.exports = router;
// const express = require('express');
// const { mountpath } = require('../app');
// const router = express.Router()

// //http://localhost:3000/api/user/

// router.get("/resister",(req,res)=>{
   
//     res.statusCode=200;
//     res.sendFile(__dirname+"/views/resis.html")
// });
// router.get("/login",(req,res)=>{
//     res.send("i'm get login requiest");
//     res.end();
// });

// module.exports = router;