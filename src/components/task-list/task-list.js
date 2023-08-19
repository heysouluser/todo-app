import { React, Component } from 'react';
import './task-list.css';
import Task from '../task';
import PropTypes from 'prop-types';

export default class TaskList extends Component {

   static propTypes = {
      tasks: PropTypes.arrayOf(PropTypes.object).isRequired
   }

   render() {
      const { tasks, onDeleted, onToggleComplete, onToggleEditing, onEditingSubmit, closeEditing } = this.props;

      const todos = tasks.map(item => {

         const { id, ...itemProps } = item;

         return (

            <Task
               {...itemProps}
               key={id}
               onDeleted={() => onDeleted(id)}
               onToggleComplete={() => onToggleComplete(id)}
               onToggleEditing={() => onToggleEditing(id)}
               onEditingSubmit={(newText) => onEditingSubmit(id, newText)}
               closeEditing={(e) => closeEditing(e, id)}
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