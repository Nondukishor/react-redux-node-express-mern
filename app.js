const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
app.get('/',(req,res)=>res.json({message:"Hello express"}))
app.listen(port,()=>console.log(`http://localhost${port}`))