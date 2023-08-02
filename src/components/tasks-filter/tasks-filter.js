import { React, Component } from 'react';
import './tasks-filter.css';
import PropTypes from 'prop-types';

export default class TasksFilter extends Component {

   static defaultProps = {
      onFiltered: () => { console.log('Нужно изменить состояние') }
   }

   static propTypes = {
      currentFilter: PropTypes.string.isRequired,
      onFiltered: PropTypes.func
   }

   filterId = 10;

   render() {
      const { currentFilter, onFiltered } = this.props;
      const filters = ['All', 'Active', 'Completed'];

      const buttons = filters.map(item => {

         return (
            <li key={this.filterId++}>
               <button type='button' className={currentFilter === item ? 'selected' : ''} onClick={onFiltered}>{item}</button>
            </li>
         )
      })

      return (
         <ul className='filters'>{buttons}</ul>
      );
   }

}
