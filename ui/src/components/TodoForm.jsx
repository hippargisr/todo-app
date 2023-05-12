import { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ fetchTodos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(!title&description){
        await axios.post('http://localhost:5000/todos', { title, description });
        setTitle('');
        setDescription('');
        fetchTodos();
      }
      window.alert("Please enter a title and description.")
    } catch (error) {
      console.error('Failed to create todo:', error);
    }
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          className='todo__title'
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className='todo__desc'
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='todo__button' type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
