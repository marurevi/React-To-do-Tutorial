import './TodoItem.css';
import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { todo } = this.props;
    const { completed, id, title } = todo;

    const viewMode = {};
    const editMode = {};

    const { editing } = this.state;
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const { handleChangeProps, deleteTodoProps, setUpdate } = this.props;
    return (
      <li className="item">
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <button type="button" onClick={() => deleteTodoProps(todo.id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          className="textInput"
          style={editMode}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
