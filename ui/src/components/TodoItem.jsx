
const TodoItem = ({ todo }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoItem;
