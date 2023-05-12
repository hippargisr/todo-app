const express = require('express');
const Router = express.Router();
const Todo = require('../models/Todo');

// Define the routes for CRUD operations
Router.get('/todos', async (req, res) => {
  try {
    // Retrieve all todos from the database
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

Router.post('/todos', async (req, res) => {
  try {
    // Create a new todo item based on the request body
    const todo = new Todo(req.body);
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

Router.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Find the todo item by id and update it
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

Router.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Find the todo item by id and delete it
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});


module.exports = Router;