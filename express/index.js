// index js should be very simple 

const app = require('./app')
const PORT = 3000;
//server listen
app.listen(PORT, ()=>{
    console.log(`server is runnig at http://localhost:${PORT}`)
})