/* eslint-disable prettier/prettier */
import './task-timer.css';

function TaskTimer() {
  return (
    <>
      <button className="icon icon-play" type="button" aria-label="play" />
      <button className="icon icon-pause" type="button" aria-label="pause" />
      <span className="timer">12:25</span>
    </>
  );
}

export default TaskTimer;
