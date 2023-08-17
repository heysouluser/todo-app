import { React } from 'react';
import './main.css';
import TaskList from '../task-list';

const Main = ({ tasks, onDeleted, onToggleComplete, onToggleEditing, onEditLabelChange, editLabel, onEditingSubmit, closeEditing }) => {
   return (
      <section className='main'>
         <TaskList
            tasks={tasks}
            onDeleted={onDeleted}
            onToggleComplete={onToggleComplete}
            onToggleEditing={onToggleEditing}
            onEditLabelChange={onEditLabelChange}
            editLabel={editLabel}
            onEditingSubmit={onEditingSubmit}
            closeEditing={closeEditing}
         />
      </section>
   );
}

export default Main;