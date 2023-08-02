import { React, Component } from 'react';
import './task-count.css';
import PropTypes from 'prop-types';

export default class TaskCount extends Component {

   static propTypes = {
      toDo: PropTypes.number.isRequired
   }

   render() {
      const { toDo } = this.props;
      return (
         <span className="todo-count" >
            {toDo} items left
         </span >
      );
   }
}

