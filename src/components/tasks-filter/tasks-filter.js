import { Component } from 'react';
import './tasks-filter.css';
import PropTypes from 'prop-types';

export default class TasksFilter extends Component {
  filterId = 10;

  render() {
    const { currentFilter, onFiltered } = this.props;
    const filters = ['All', 'Active', 'Completed'];

    const buttons = filters.map((item) => (
      <li key={this.filterId++}>
        <button type="button" className={currentFilter === item ? 'selected' : ''} onClick={onFiltered}>
          {item}
        </button>
      </li>
    ));

    return <ul className="filters">{buttons}</ul>;
  }
}

TasksFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};
