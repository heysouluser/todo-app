import './new-task-form.css';

function NewTaskForm({ label, handleChange, onSubmit, error, min, sec }) {
  const onLabelChange = (e) => {
    handleChange('label', e.target.value);
  };
  const onMinChange = (e) => {
    handleChange('min', e.target.value);
  };
  const onSecChange = (e) => {
    handleChange('sec', e.target.value);
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        className={error ? 'new-todo error' : 'new-todo'}
        name="task"
        placeholder="Task"
        onChange={onLabelChange}
        value={label}
      />
      <input className="new-todo-form__timer" name="min" placeholder="Min" onChange={onMinChange} value={min} />
      <input className="new-todo-form__timer" name="sec" placeholder="Sec" onChange={onSecChange} value={sec} />
      {error ? <div className="error-message">{error}</div> : ''}
    </form>
  );
}

export default NewTaskForm;
