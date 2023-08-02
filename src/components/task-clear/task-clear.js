import { React } from 'react';
import './task-clear.css';
import PropTypes from 'prop-types';

const TaskClear = ({ clearCompleted }) => {

   return (
      <button
         className='clear-completed'
         onClick={clearCompleted}>
         Clear completed
      </button>
   );
}

TaskClear.propTypes = {
   clearCompleted: PropTypes.func.isRequired
}

export default TaskClear;