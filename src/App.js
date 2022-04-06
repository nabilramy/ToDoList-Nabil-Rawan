import { Component } from 'react';
import AddForm from './component/AddForm';
import ToDoCard from './component/ToDoCard';

class App extends Component {
  state = {
    title: '',
    description: '',
    timetodo: '',
    todolist: [
      {
        id: 0,
        title: 'title1',
        description: 'description1',
        timetodo: '11/11/2022 12:12 PM',
        done: false,
      },
      {
        id: 1,
        title: 'title2',
        description: 'description2',
        timetodo: '12/12/2022 11:11 AM',
        done: true,
      },
      {
        id: 2,
        title: 'title3',
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
 
  handleDoneChange = ({ target }) => {
    const { name, checked } = target;
    return this.setState({ todolist: [{[name]: checked}] });
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
    console.log("here")
     this.setState( { todolist: [...todolist, todo] });
  };

  handleDeleteToList = (todoid) => {
    const { todolist } = this.state;
    const todoArray = todolist.filter(({ id }) => todoid !== id);
    return this.setState({ todolist: todoArray });
  };

  // handleDoneToDo = (todoid) => {
  //   const { todolist } = this.state;
  //   const todoArray = todolist.map((todo) => {
  //     if (todo.id === todoid) {
  //       todo.done ? (todo.done = false) : (todo.done = true);
  //       return todo;
  //     }
  //     return todo;
  //   });
  //   return this.setState({ todolist: todoArray });
  // };

  render() {
    const { todolist, title, description, timetodo } = this.state;
    const {
      handleChange,
      handleDeleteToList,
      handleAddToList,
      handleDoneChange,
    } = this;
    return (
      <div className='App'>
        <h1 class='todo'>ToDo App</h1>
        <AddForm
          handleAddToList={handleAddToList}
          handleChange={handleChange}
          title={title}
          description={description}
          timetodo={timetodo}
        />
        <ToDoCard
          todolist={todolist}
          handleDeleteToList={handleDeleteToList}
          handleDoneChange={handleDoneChange}
        />
      </div>
    );
  }
}

export default App;
