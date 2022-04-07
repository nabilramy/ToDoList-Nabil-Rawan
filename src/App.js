import { Component } from 'react';
import AddForm from './component/AddForm.jsx';
import ToDoCard from './component/ToDoCard';

class App extends Component {
  state = {
    title: '',
    description: '',
    timetodo: '',
    wantToEditI : false,
    beingEditedId: null,
    displayWhat: 'all',
    todolist: [
      {
        id: 0,
        title: 'Learn React',
        description: 'description1',
        timetodo: '11/11/2022 12:12 PM',
        done: false,
      },
      {
        id: 1,
        title: 'Learn Redux',
        description: 'description2',
        timetodo: '12/12/2022 11:11 AM',
        done: true,
      },
      {
        id: 2,
        title: 'Learn React-Redux',
        description: 'description3',
        timetodo: '12/12/2022 11:11 AM',
        done: false,
      },
    ],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    return this.setState({ [name]: value });
  };
 
 
  handleAddToList = (e) => {
    e.preventDefault();
    const { title, description, timetodo, todolist } = this.state;
    const todo = {
      id: Math.random(),
      title,
      description,
      timetodo: timetodo,
      done: false,
    };
     this.setState( { todolist: [...todolist, todo] });
  };

  
  handleDeleteToList = (todoid) => {
    const { todolist } = this.state;
    const todoArray = todolist.filter(({ id }) => todoid !== id);
    return this.setState({ todolist: todoArray });
  };
  
  handleDoneToDo = (todoid) => {
    const { todolist } = this.state;
    const todoArray = todolist.map((todo) => {
      if (todo.id === todoid) {
        todo.done ? (todo.done = false) : (todo.done = true);
      }
      return todo;
    });
    this.setState({ todolist: todoArray });
  };
  
  handleEditToDo = (todoid) => {
    const { todolist } = this.state;
    let updatedTodo = todolist.find((todo) => todo.id === todoid);
   
      this.setState({ title: updatedTodo.title, description: updatedTodo.description, wantToEdit: true, beingEditedId: todoid });
  };

  closeEdit = () => {
    this.setState({ title: '', description: '',  wantToEdit: false });
  };

  ApplyEdit = (e) => {
    e.preventDefault();
    const { title, description, todolist, beingEditedId } = this.state;
    const todoArray = todolist.map((todo) => {
      if (todo.id === beingEditedId) {
        todo.title = title;
        todo.description = description;
      }
      return todo;
    });
    this.setState({ todolist: todoArray,  title: '', description: '',  wantToEdit: false, beingEditedId: null});
  };


  Filtered = () => {
    const {  todolist, displayWhat } = this.state;

    return todolist.filter((todo) => {
      if (displayWhat === 'all') {
      return true
      } else if (displayWhat === 'done') {
        if (todo.done) {
          return true
        }
      } else if (displayWhat === 'undone') {
        if (!todo.done) {
          return true
  };
      }
      return false
  })
   
  
  }
  render() {
    const { title, description, timetodo, wantToEdit} = this.state;
    const {
      handleChange,
      handleDeleteToList,
      handleAddToList,
      handleDoneToDo,
      handleEditToDo,
      closeEdit,
      ApplyEdit,
      Filtered,
      

    } = this;
    
    return (
      <div className='App'>
        <h1 className='todo'>ToDo App</h1>
        <AddForm
          handleAddToList={handleAddToList}
          handleChange={handleChange}
          title={title}
          description={description}
          timetodo={timetodo}
          wantToEdit={wantToEdit}
          closeEdit={closeEdit}
          ApplyEdit={ApplyEdit}
        />
        
        <ToDoCard
          todolist={Filtered()}
          handleDeleteToList={handleDeleteToList}
          handleDoneChange={handleDoneToDo}
          handleEditToDo={handleEditToDo}
        />
      </div>
    );
  }
}

export default App;
