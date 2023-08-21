import './task-count.css';
import PropTypes from 'prop-types';

function TaskCount({ toDo }) {
  return <span className="todo-count">{toDo} items left</span>;
}

TaskCount.propTypes = {
  toDo: PropTypes.number.isRequired,
};

export default TaskCount;
