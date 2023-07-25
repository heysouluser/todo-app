import { React, Component } from 'react';
import './task.css';

export default class Task extends Component {

   render() {
      const { task, completed, id, onDeleted, onToggleComplete } = this.props;

      let classNames = '';
      if (completed) {
         classNames += ' completed';
      }

      return (
         <li key={id} className={classNames}>
            <div className='view'>
               <input className="toggle" type="checkbox" />
               <label onClick={onToggleComplete}>
                  <span className="description">{task}</span>
                  <span className="created">created 17 seconds ago</span>
               </label>
               <button className="icon icon-edit"></button>
               <button
                  className="icon icon-destroy"
                  onClick={onDeleted}>
               </button>
            </div >
         </li>
      );
   }

}
