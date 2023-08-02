import { React, Component } from 'react';
import './task-list.css';
import Task from '../task';
import PropTypes from 'prop-types';

export default class TaskList extends Component {

   static propTypes = {
      tasks: PropTypes.arrayOf(PropTypes.object).isRequired
   }

   render() {
      const { tasks, onDeleted, onToggleComplete, onToggleEditing } = this.props;
      const todos = tasks.map(item => {

         const { id, ...itemProps } = item;

         return (

            <Task
               {...itemProps}
               onDeleted={() => onDeleted(id)}
               onToggleComplete={() => onToggleComplete(id)}
               onToggleEditing={() => onToggleEditing(id)}
               key={id}

            />
         )
      })

      return (
         <ul className='todo-list'>
            {todos}
         </ul>
      );
   }

}