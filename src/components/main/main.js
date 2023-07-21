import { React } from 'react';
import './main.css';
import TaskList from '../task-list';

const Main = ({ tasks }) => {
   return (
      <section className='main'>
         <TaskList tasks={tasks} />
      </section>
   );
}

export default Main;