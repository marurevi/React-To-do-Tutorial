import React, { Component } from 'react';
import Header from './Header';
import TodosList from './TodosList';

export class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  handleChange = (id) => {
    console.log("clicked", id);
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />  
      </div>
    );
  }
}

export default TodoContainer;
