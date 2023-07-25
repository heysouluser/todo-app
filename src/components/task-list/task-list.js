import { React, Component } from 'react';
import './task-list.css';
import Task from '../task';

export default class TaskList extends Component {


   render() {
      const { tasks, onDeleted, onToggleComplete } = this.props;

      const todos = tasks.map(item => {

         const { id, ...itemProps } = item;

         return (

            <Task
               {...itemProps}
               onDeleted={() => onDeleted(id)}
               onToggleComplete={() => onToggleComplete(id)}
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