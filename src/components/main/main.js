import { React } from 'react';
import './main.css';
import TaskList from '../task-list';

const Main = ({ tasks, onDeleted, onToggleComplete, onToggleEditing }) => {
   return (
      <section className='main'>
         <TaskList
            tasks={tasks}
            onDeleted={onDeleted}
            onToggleComplete={onToggleComplete}
            onToggleEditing={onToggleEditing}

         />
      </section>
   );
}

export default Main;