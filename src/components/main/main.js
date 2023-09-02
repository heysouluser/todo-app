import './main.css';
import TaskList from '../task-list';

function Main({
  tasks,
  onDeleted,
  onToggleComplete,
  onToggleEditing,
  onEditingSubmit,
  closeEditing,
  startTimer,
  stopTimer,
}) {
  return (
    <section className="main">
      <TaskList
        tasks={tasks}
        onDeleted={onDeleted}
        onToggleComplete={onToggleComplete}
        onToggleEditing={onToggleEditing}
        onEditingSubmit={onEditingSubmit}
        closeEditing={closeEditing}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
    </section>
  );
}

export default Main;
