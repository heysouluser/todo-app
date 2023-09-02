/* eslint-disable prettier/prettier */
import './task-timer.css';

function TaskTimer({ min, sec, startTimer, stopTimer }) {
  return (
    <>
      <button className="icon icon-play" type="button" aria-label="play" onClick={startTimer} />
      <button className="icon icon-pause" type="button" aria-label="pause" onClick={stopTimer} />
      <span className="timer">
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </span>
    </>
  );
}

export default TaskTimer;
