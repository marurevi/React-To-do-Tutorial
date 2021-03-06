import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export class TodosList extends React.PureComponent {
  render() {
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}
TodosList.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array.isRequired,
};
export default TodosList;
