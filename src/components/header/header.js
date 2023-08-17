import { React } from 'react';
import './header.css';
import NewTaskForm from '../new-task-form';

const Header = ({ onAdded, label, onLabelChange, onSubmit, error }) => {

   return (
      <header className='header'>
         <h1>todos</h1>
         <NewTaskForm
            label={label}
            error={error}
            onAdded={onAdded}
            onLabelChange={onLabelChange}
            onSubmit={onSubmit}
         />
      </header>
   );
}

export default Header;