import { React } from 'react';
import './main.css';
import TaskList from '../task-list';

const Main = ({ tasks, onDeleted, onToggleComplete }) => {
   return (
      <section className='main'>
         <TaskList
            tasks={tasks}
            onDeleted={onDeleted}
            onToggleComplete={onToggleComplete}
         />
      </section>
   );
}

export default Main;