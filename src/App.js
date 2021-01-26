import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const list = [
  {
    task: "buy groceries",
    id: 1,
    completed: false,
  },
  {
    task: "put away groceries",
    id: 2,
    completed: false,
  },
  {
    task: "cook groceries",
    id: 3,
    completed: false,
  },
  {
    task: "eat groceries",
    id: 4,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      list: list,
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleListItem = (itemId) => {
    console.log("cd: App.js: toggleListItem: ", itemId);
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.completed),
    });
  };

  addListItem = (newItem) => {
    this.setState({
      list: [
        ...this.state.list,
        { id: Date.now(), task: newItem, completed: false },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to The Amazing Todo App!</h1>
          <TodoForm addListItem={this.addListItem} />
        </div>
        <div>
          <TodoList
            list={this.state.list}
            toggleListItem={this.toggleListItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
