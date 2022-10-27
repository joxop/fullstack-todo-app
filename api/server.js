const express =require('express');
const mongoose =require('mongoose');
const cors =require('cors');
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3001
const password = process.env.PASSWORD

mongoose.connect(`mongodb+srv://testing:${password}@cluster0.aldzgns.mongodb.net/?retryWrites=true&w=majority`)



app.listen(port, ()=>{console.log(`now listening on port: ${port}`)} )