const express =require('express');
const mongoose =require('mongoose');
const cors =require('cors');
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3001



app.listen(port, ()=>{console.log(`now listening on port: ${port}`)} )