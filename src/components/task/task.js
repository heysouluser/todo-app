import { React } from 'react';
import './task.css';

const Task = ({ task }) => {

   return (
      <div className='view'>
         <input class="toggle" type="checkbox" />
         <label>
            <span class="description">{task}</span>
            <span class="created">created 17 seconds ago</span>
         </label>
         <button class="icon icon-edit"></button>
         <button class="icon icon-destroy"></button>
      </div>
   );
}

export default Task;