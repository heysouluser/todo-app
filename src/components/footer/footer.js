import { React } from 'react';
import './footer.css';
import TaskCount from '../task-count';
import TasksFilter from '../tasks-filter';
import TaskClear from '../task-clear';

const Footer = () => {

   return (
      <footer className='footer'>
         <TaskCount />
         <TasksFilter />
         <TaskClear />
      </footer>
   );
}

export default Footer;