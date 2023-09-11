import './tasks-filter.css';
import PropTypes from 'prop-types';

export default function TasksFilter({ currentFilter, onFiltered }) {
  let filterId = 10;

  const filters = ['All', 'Active', 'Completed'];

  const buttons = filters.map((item) => (
    <li key={filterId++}>
      <button type="button" className={currentFilter === item ? 'selected' : ''} onClick={onFiltered}>
        {item}
      </button>
    </li>
  ));

  return <ul className="filters">{buttons}</ul>;
}

TasksFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};
