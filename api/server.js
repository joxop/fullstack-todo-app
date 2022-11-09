const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;
const password = process.env.PASSWORD;

mongoose.connect(`mongodb+srv://testing:${password}@cluster0.aldzgns.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("connectd to DB"))
  .catch(console.error);


const Todo = require('./models/Todo')

app.get('/todos', async(req,res) =>{
  const todos = await Todo.find()

  res.json(todos)
})

app.post('/todo/new', (req,res) => {
  const todo = new Todo({
    text: req.body.text
  })

  todo.save();

  res.json(todo);

})

app.delete('/todo/delete/:id', async (req,res) =>{
  const result = await Todo.findByIdAndDelete(req.params.id)

  res.json(result)
})

app.get('/todo/complete/:id', async(req, res) =>{
  const todo = await Todo.findById(req.params.id);

  todo.complete = !todo.complete;

  todo.save();
  res.json(todo)
})



app.listen(port, () => {
  console.log(`now listening on port: ${port}`);
});
 