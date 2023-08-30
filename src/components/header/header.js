import './header.css';
import NewTaskForm from '../new-task-form';

function Header({ onAdded, label, handleChange, onSubmit, error, min, sec }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm
        label={label}
        error={error}
        onAdded={onAdded}
        handleChange={handleChange}
        onSubmit={onSubmit}
        min={min}
        sec={sec}
      />
    </header>
  );
}

export default Header;
