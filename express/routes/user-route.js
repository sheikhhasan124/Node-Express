const express = require('express');
const { mountpath } = require('../app');
const router = express.Router()

//http://localhost:3000/api/user/

router.get("/resister",(req,res)=>{
    res.send("i'm get resister requiest");
    res.end();
});
router.get("/login",(req,res)=>{
    res.send("i'm get login requiest");
    res.end();
});

module.exports = router;