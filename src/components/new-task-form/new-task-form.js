import { React, Component } from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {

   render() {

      const { label, onLabelChange, onSubmit, error } = this.props;

      return (
         <form onSubmit={onSubmit}>
            <input className={error ? 'new-todo error' : 'new-todo'}
               placeholder="What needs to be done?"
               autoFocus
               onChange={onLabelChange}
               value={label}>
            </input>
            {error ? <div className='error-message'>{error}</div> : ''}
         </form>
      );
   }

}
