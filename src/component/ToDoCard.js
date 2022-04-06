import React from 'react';

const ToDoCard = ({ todolist, handleDeleteToList, handleDoneChange }) => {
  const todoItems = todolist.map((todo) => (
    <div className='box' key={todo.id} id={todo.id}>
      <input
      id={todo.id}
        type='checkbox'
        name='done'
        onChange={handleDoneChange}
        checked={todo.done}
      />
      {/* <label for='done'> done</label> */}
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{todo.timetodo}</p>
      <button>Edit</button>
      <button onClick={() => handleDeleteToList(todo.id)}>Delete</button>
    </div>
  ));
  return <div className='wrapper'>{todoItems}</div>;
};
export default ToDoCard;
