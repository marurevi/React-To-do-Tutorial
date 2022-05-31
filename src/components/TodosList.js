import React, { Component } from 'react';
import TodoItem from './TodoItem';

export class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo.title} />
        ))}
      </ul>
    );
  }
}

export default TodosList;