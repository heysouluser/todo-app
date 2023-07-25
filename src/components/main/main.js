import { React } from 'react';
import './main.css';
import TaskList from '../task-list';

const Main = ({ tasks, onDeleted }) => {
   return (
      <section className='main'>
         <TaskList
            tasks={tasks}
            onDeleted={onDeleted}
         />
      </section>
   );
}

export default Main;