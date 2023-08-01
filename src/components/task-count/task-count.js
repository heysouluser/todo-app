import { React, Component } from 'react';
import './task-count.css';

export default class TaskCount extends Component {

   render() {
      const { toDo } = this.props;
      return (
         <span className="todo-count" >
            {toDo} items left
         </span >
      );
   }
}

