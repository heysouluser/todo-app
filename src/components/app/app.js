import { useState, useEffect, useCallback } from 'react';

import './app.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [label, setLabel] = useState('');
  const [error, setError] = useState(null);
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const [uniqId, setUniqId] = useState(10);

  function createTodoItem(task, mn, sc) {
    setUniqId(uniqId + 1);
    return {
      task,
      mn,
      sc,
      isRunning: false,
      id: uniqId,
      completed: false,
      editing: false,
      date: new Date(),
    };
  }

  const updateTodoData = (id, newData) => {
    setTodoData((prevData) =>
      prevData.map((todoItem) => (todoItem.id === id ? { ...todoItem, ...newData } : todoItem))
    );
  };

  const startTimer = (id) => {
    updateTodoData(id, { isRunning: true });
  };

  const stopTimer = useCallback((id) => {
    updateTodoData(id, { isRunning: false });
  }, []);

  useEffect(() => {
    const timers = {};
    todoData.forEach((task) => {
      if (task.isRunning) {
        timers[task.id] = setInterval(() => {
          setTodoData((prevTasks) =>
            prevTasks.map((t) => {
              if (t.id === task.id) {
                const { sc, mn } = t;
                let remainSec = sc - 1;
                let remainMin = mn;

                if (remainSec < 0) {
                  remainSec = 59;
                  remainMin -= 1;

                  if (remainMin < 0) {
                    remainMin = 0;
                    remainSec = 0;
                    stopTimer(t.id);
                  }
                }
                return { ...t, mn: remainMin, sc: remainSec };
              }
              return t;
            })
          );
        }, 1000);
      }
    });

    return () => {
      Object.values(timers).forEach((timer) => clearInterval(timer));
    };
  }, [todoData, stopTimer]);

  const deleteItem = (id) => {
    setTodoData((prevData) => prevData.filter((t) => t.id !== id));
  };

  const addItem = (text, m, s) => {
    const newItem = createTodoItem(text, m, s);
    if (text.trim() !== '' && m.trim() !== '' && s.trim() !== '') {
      setTodoData((prevData) => [...prevData, newItem]);
    } else {
      setError('Необходимо заполнить поле');
    }
  };

  const toggleProperty = (arr, id, prop) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [prop]: !oldItem[prop],
    };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  const onToggleComplete = (id) => {
    setTodoData((prevData) => toggleProperty(prevData, id, 'completed'));
  };

  const onToggleEditing = (id) => {
    setTodoData((prevData) => toggleProperty(prevData, id, 'editing'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(null);
    switch (name) {
      case 'label':
        setLabel(value);
        break;
      case 'min':
        setMin(value);
        break;
      case 'sec':
        setSec(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(label, min, sec);
    setLabel('');
    setMin('');
    setSec('');
  };

  const onFiltered = (e) => {
    const newFilter = e.target.textContent;
    setFilter(newFilter);
  };

  const clearCompleted = () => {
    setTodoData((prevData) => prevData.filter((item) => item.completed !== true));
  };

  const onEditingSubmit = (id, newText) => {
    updateTodoData(id, { task: newText, editing: false });
  };

  const closeEditing = (e, id) => {
    if (e.key === 'Escape') {
      updateTodoData(id, { editing: false });
    }
  };

  const doneCount = todoData.filter((el) => el.completed).length;
  const todoCount = todoData.length - doneCount;
  const filteredData = todoData.filter((data) => {
    switch (filter) {
      case 'Active':
        return !data.completed;
      case 'Completed':
        return data.completed;
      default:
        return data;
    }
  });

  return (
    <section className="todoapp">
      <Header label={label} error={error} handleChange={handleChange} onSubmit={onSubmit} min={min} sec={sec} />
      <Main
        tasks={filteredData}
        onDeleted={deleteItem}
        onToggleComplete={onToggleComplete}
        onToggleEditing={onToggleEditing}
        onEditingSubmit={onEditingSubmit}
        closeEditing={closeEditing}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <Footer toDo={todoCount} currentFilter={filter} onFiltered={onFiltered} clearCompleted={clearCompleted} />
    </section>
  );
}
