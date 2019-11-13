const express = require('express');
require('dotenv').config()

const port = process.env.PORT || 5001;
const app = express();
app.get('/',(req,res)=>{
    res.json({
        message: "Hello! Welcome to Express js"
    })
});

app.listen(port,()=>console.log(`Server Started on http://localhost:${port}`))