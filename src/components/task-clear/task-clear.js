import './task-clear.css';
import PropTypes from 'prop-types';

function TaskClear({ clearCompleted }) {
  return (
    <button type="button" className="clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  );
}

TaskClear.propTypes = {
  clearCompleted: PropTypes.func.isRequired,
};

export default TaskClear;
