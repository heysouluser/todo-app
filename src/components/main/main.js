import { React } from 'react';
import './main.css';
import TaskList from '../task-list';

const Main = ({ tasks, onDeleted, onToggleComplete, onToggleEditing, onEditingSubmit, closeEditing }) => {
   return (
      <section className='main'>
         <TaskList
            tasks={tasks}
            onDeleted={onDeleted}
            onToggleComplete={onToggleComplete}
            onToggleEditing={onToggleEditing}
            onEditingSubmit={onEditingSubmit}
            closeEditing={closeEditing}
         />
      </section>
   );
}

export default Main;