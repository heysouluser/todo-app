import { React, Component } from 'react';
import './task.css';

export default class Task extends Component {

   render() {
      const { task, onDeleted, onToggleComplete } = this.props;
      return (
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
      );
   }

}
