import { React, Component } from 'react';
import './task.css';
import PropTypes from 'prop-types';

export default class Task extends Component {

   static defaultProps = {
      completed: false,
      editing: false,
   }

   static propTypes = {
      completed: PropTypes.bool,
      editing: PropTypes.bool,
      task: PropTypes.string.isRequired,
      onDeleted: PropTypes.func.isRequired
   }

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
               <input className="toggle" type="checkbox" onChange={onToggleComplete} checked={completed} />
               <label onClick={onToggleComplete}>
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