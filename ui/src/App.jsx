import './App.css'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  };

  return (
    <div>
      <TodoForm fetchTodos={fetchTodos}/>
      <TodoList todos={todos} fetchTodos={fetchTodos}/>
    </div>
  );
};

export default App;