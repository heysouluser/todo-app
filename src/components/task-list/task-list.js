import { React, Component } from 'react';
import './task-list.css';
import Task from '../task';

export default class TaskList extends Component {

   state = {
      completed: false,
      editing: false
   };

   labelClick = () => {
      this.setState(({ completed }) => {
         return {
            completed: !completed
         }
      });
   }

   render() {
      const { tasks, onDeleted } = this.props;
      const { completed, editing } = this.state;
      let classNames = '';

      if (completed) {
         classNames += ' completed';
      }

      if (editing) {
         classNames += ' editing';
      }

      const todos = tasks.map(item => {

         const { id, ...itemProps } = item;

         return (
            <li key={id} className={classNames}>
               <Task
                  {...itemProps}
                  onLabelClick={this.labelClick}
                  onDeleted={() => onDeleted(id)}
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