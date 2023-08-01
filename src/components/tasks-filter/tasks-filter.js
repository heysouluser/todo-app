import { React, Component } from 'react';
import './tasks-filter.css';

export default class TasksFilter extends Component {

   filterId = 10;

   render() {
      const { filter, onFiltered } = this.props;
      const filters = ['All', 'Active', 'Completed'];

      const buttons = filters.map(item => {

         return (
            <li key={this.filterId++}>
               <button type='button' className={filter === item ? 'selected' : ''} onClick={onFiltered}>{item}</button>
            </li>
         )
      })

      return (
         <ul className='filters'>{buttons}</ul>
      );
   }

}
