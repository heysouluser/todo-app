import { React } from 'react';
import './task-list.css';
import Task from '../task';

const TaskList = ({ tasks }) => {

   const todos = tasks.map(item => {

      const { id, completed, editing, ...itemProps } = item;

      return (
         <li key={id} className={completed ? "completed" : editing ? "editing" : ""}>
            <Task {...itemProps} />
         </li>
      )
   })

   return (
      <ul className='todo-list'>
         {todos}
      </ul>
   );
}

export default TaskList;