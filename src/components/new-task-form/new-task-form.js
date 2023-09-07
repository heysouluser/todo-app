import './new-task-form.css';

function NewTaskForm({ label, handleChange, onSubmit, error, min, sec }) {
  // const onLabelChange = (e) => {
  //   handleChange('label', e.target.value);
  // };
  // const onMinChange = (e) => {
  //   handleChange('min', e.target.value);
  // };
  // const onSecChange = (e) => {
  //   handleChange('sec', e.target.value);
  // };

  return (
    <form className={error ? 'new-todo-form error' : 'new-todo-form'} onSubmit={onSubmit}>
      <input className="new-todo" name="label" placeholder="Task" onChange={handleChange} value={label} />
      <input
        className="new-todo-form__timer"
        name="min"
        placeholder="Min"
        onChange={handleChange}
        value={min}
        pattern="^(?:[1-9]|[1-5][0-9])$"
      />
      <input
        className="new-todo-form__timer"
        name="sec"
        placeholder="Sec"
        onChange={handleChange}
        value={sec}
        pattern="^(?:[1-9]|[1-5][0-9])$"
      />
      <button type="submit" aria-label="submit" />
      {error ? <div className="error-message">{error}</div> : ''}
    </form>
  );
}

export default NewTaskForm;
