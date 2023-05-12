import axios from "axios";
import { useState } from "react";

const TodoList = ({todos, fetchTodos}) => {
  
  const [editTodo, setEditTodo] = useState(null);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };
  const handleEdit = (todo) => {
    setEditTodo({
      id: todo._id,
      title: todo.title,
      description: todo.description,
    });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/todos/${editTodo.id}`, {
        title: editTodo.title,
        description: editTodo.description,
      });
      setEditTodo(null);
      fetchTodos();
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };
  return (
    <div className="todoList__div">
      <h2>Todo List</h2>
      <ul className="todoList">
        {todos.map((todo) => (
          <li key={todo._id} >
          {editTodo && editTodo.id === todo._id ? (
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editTodo.title}
                onChange={(e) =>
                  setEditTodo({ ...editTodo, title: e.target.value })
                }
              />
              <input
                type="text"
                value={editTodo.description}
                onChange={(e) =>
                  setEditTodo({ ...editTodo, description: e.target.value })
                }
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <div className="todoList_item">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <button onClick={() => handleDelete(todo._id)}>Delete</button>
              <button onClick={() => handleEdit(todo)}>Edit</button>
            </div>
          )}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
