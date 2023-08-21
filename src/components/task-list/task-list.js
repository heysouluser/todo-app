import './task-list.css';

import Task from '../task';

function TaskList({ tasks, onDeleted, onToggleComplete, onToggleEditing, onEditingSubmit, closeEditing }) {
  const todos = tasks.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <Task
        {...itemProps}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleComplete={() => onToggleComplete(id)}
        onToggleEditing={() => onToggleEditing(id)}
        onEditingSubmit={(newText) => onEditingSubmit(id, newText)}
        closeEditing={(e) => closeEditing(e, id)}
      />
    );
  });

  return <ul className="todo-list">{todos}</ul>;
}

export default TaskList;
