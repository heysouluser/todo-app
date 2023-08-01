import { React, Component } from 'react';
import './task.css';

export default class Task extends Component {

   labelId = 1;

   render() {
      const { task, completed, editing, id, onDeleted, onToggleComplete, onToggleEditing } = this.props;

      let classNames = '';
      if (completed) {
         classNames += 'completed';
      }

      if (editing) {
         classNames += 'editing';
      }

      return (
         <li key={id} className={classNames}>
            <div className='view'>
               <input className="toggle" id={this.labelId++} type="checkbox" />
               <label htmlFor={this.labelId++} onClick={onToggleComplete}>
                  <span className="description">{task}</span>
                  <span className="created">created 17 seconds ago</span>
               </label>
               <button
                  className="icon icon-edit"
                  onClick={onToggleEditing}></button>
               <button
                  className="icon icon-destroy"
                  onClick={onDeleted}>
               </button>
            </div >
         </li>
      );
   }

}
