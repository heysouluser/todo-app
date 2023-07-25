import { React, Component } from 'react';
import './task-list.css';
import Task from '../task';

export default class TaskList extends Component {


   render() {
      const { tasks, onDeleted, onToggleComplete } = this.props;
      let classNames = '';

      const todos = tasks.map(item => {

         const { id, completed, ...itemProps } = item;

         if (completed) {
            classNames += ' completed';
         }

         return (
            <li key={id} className={classNames}>
               <Task
                  {...itemProps}
                  onLabelClick={this.labelClick}
                  onDeleted={() => onDeleted(id)}
                  onToggleComplete={() => onToggleComplete(id)}
               />
            </li>
         )
      })

      return (
         <ul className='todo-list'>
            {todos}
         </ul>
      );
   }

}