/* eslint-disable prettier/prettier */
import './task-timer.css';

function TaskTimer({ min, sec }) {
  return (
    <>
      <button className="icon icon-play" type="button" aria-label="play" />
      <button className="icon icon-pause" type="button" aria-label="pause" />
      <span className="timer">{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}</span>
    </>
  );
}

export default TaskTimer;
