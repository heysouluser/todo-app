import './new-task-form.css';

function NewTaskForm({ label, onLabelChange, onSubmit, error }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className={error ? 'new-todo error' : 'new-todo'}
        placeholder="What needs to be done?"
        onChange={onLabelChange}
        value={label}
      />
      {error ? <div className="error-message">{error}</div> : ''}
    </form>
  );
}

export default NewTaskForm;
