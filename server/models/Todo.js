const mongoose = require('mongoose');
// Define the schema for a todo item
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// Create a Todo model based on the schema
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
