const express = require('express');
const mongoose = require('mongoose');
const TodoRouter = require('./routes/TodoRoutes');
const cors = require('cors');

// Create an Express server
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", TodoRouter);

// Set up the connection to MongoDB using Mongoose
mongoose
  .connect(
    'mongodb+srv://sunil:YWbW8kBfFY5Owl4o@cluster0.njjfe5u.mongodb.net/?retryWrites=true&w=majority', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
);

// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
