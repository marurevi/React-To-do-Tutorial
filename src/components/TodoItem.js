import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.PureComponent {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        {' '}
        {todo.title}
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
