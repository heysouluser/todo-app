/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import ru from 'date-fns/locale/ru';

import TaskTimer from '../task-timer';
import './task.css';

export default function Task({
  task,
  completed,
  editing,
  id,
  date,
  onDeleted,
  onToggleComplete,
  onToggleEditing,
  closeEditing,
  onEditingSubmit,
  mn,
  sc,
  startTimer,
  stopTimer,
}) {
  const [edit, setEdit] = useState(task);

  const onEditLabelChange = (e) => {
    setEdit(e.target.value.trimStart());
  };

  const onEditing = (e) => {
    e.preventDefault();
    onEditingSubmit(edit);
  };

  let classNames = '';
  if (completed) {
    classNames += 'completed';
  }

  if (editing) {
    classNames += 'editing';
  }

  return (
    <li key={id} className={classNames}>
      {!editing ? (
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleComplete} checked={completed} />
          <label>
            <span className="title">{task}</span>
            <span className="description">
              <TaskTimer min={mn} sec={sc} startTimer={startTimer} stopTimer={stopTimer} />
            </span>
            <span className="description created">
              создано {formatDistanceToNow(date, { includeSeconds: true, addSuffix: true, locale: ru })}
            </span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="editing" onClick={onToggleEditing} />
          <button className="icon icon-destroy" type="button" aria-label="deleting" onClick={onDeleted} />
        </div>
      ) : (
        <form onSubmit={onEditing}>
          <input
            className="edit"
            value={edit}
            onChange={onEditLabelChange}
            onBlur={onToggleEditing}
            onKeyDown={closeEditing}
            required
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
        </form>
      )}
    </li>
  );
}

Task.defaultProps = {
  completed: false,
  editing: false,
};

Task.propTypes = {
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  task: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired,
};
