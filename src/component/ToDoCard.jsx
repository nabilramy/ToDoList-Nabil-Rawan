
const ToDoCard = ({ todolist, handleDeleteToList, handleDoneChange, handleEditToDo}) => {
  const todoItems = todolist.map((todo) => (
    <div className='box' key={todo.id} id={todo.id}>
      <input
      id={todo.id}
        type='checkbox'
        name='done'
        onChange={ () => handleDoneChange(todo.id)}
        checked={todo.done}
      />
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{(todo.timetodo).replace('T', ' ')}</p>
      <button onClick={() => handleEditToDo(todo.id) }>Edit</button>
      <button onClick={() => handleDeleteToList(todo.id)}>Delete</button>
    </div>
  ));
  return <div className='wrapper'>{todoItems}</div>;
};
export default ToDoCard;
