import './footer.css';
import TaskCount from '../task-count';
import TasksFilter from '../tasks-filter';
import TaskClear from '../task-clear';

function Footer({ toDo, currentFilter, onFiltered, clearCompleted }) {
  return (
    <footer className="footer">
      <TaskCount toDo={toDo} />
      <TasksFilter currentFilter={currentFilter} onFiltered={onFiltered} />
      <TaskClear clearCompleted={clearCompleted} />
    </footer>
  );
}

export default Footer;
