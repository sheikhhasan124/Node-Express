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

