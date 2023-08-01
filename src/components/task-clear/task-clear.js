import { React } from 'react';
import './task-clear.css';

const TaskClear = ({ clearCompleted }) => {

   return (
      <button
         className='clear-completed'
         onClick={clearCompleted}>
         Clear completed
      </button>
   );
}

export default TaskClear;