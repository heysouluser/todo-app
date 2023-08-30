import { Component } from 'react';

import './app.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [this.createTodoItem('Completed', '10', '34')],
    filter: 'All',
    label: '',
    error: null,
    min: '',
    sec: '',
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((t) => t.id !== id),
    }));
  };

  addItem = (text, min, sec) => {
    const newItem = this.createTodoItem(text, min, sec);
    if (text.trim() !== '' && min.trim() !== '' && sec.trim() !== '') {
      this.setState(({ todoData }) => {
        const newArr = [...todoData, newItem];
        return {
          todoData: newArr,
        };
      });
    } else {
      this.setState({
        error: 'Необходимо заполнить поле',
      });
    }
  };

  toggleProperty = (arr, id, prop) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [prop]: !oldItem[prop],
    };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleComplete = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'completed'),
    }));
  };

  onToggleEditing = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, 'editing'),
    }));
  };

  handleChange = (property, value) => {
    this.setState({
      [property]: value,
      error: null,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.addItem(this.state.label, this.state.min, this.state.sec);
    this.setState({
      label: '',
      min: '',
      sec: '',
    });
  };

  onFiltered = (e) => {
    const filter = e.target.textContent;
    this.setState({ filter });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((item) => item.completed !== true),
    }));
  };

  onEditingSubmit = (id, newText) => {
    this.setState(({ todoData }) => {
      const newLabel = todoData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            task: newText,
            editing: false,
          };
        }
        return item;
      });
      return {
        todoData: newLabel,
      };
    });
  };

  closeEditing = (e, id) => {
    if (e.key === 'Escape') {
      this.setState(({ todoData }) => {
        const newLabel = todoData.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              editing: false,
            };
          }
          return item;
        });
        return {
          todoData: newLabel,
        };
      });
    }
  };

  createTodoItem(task, min, sec) {
    return {
      task,
      id: this.maxId++,
      completed: false,
      editing: false,
      date: new Date(),
      min,
      sec,
    };
  }

  render() {
    const { todoData, filter, label, editLabel, error, min, sec } = this.state;

    const doneCount = todoData.filter((el) => el.completed).length;
    const todoCount = todoData.length - doneCount;
    const copyData = [...todoData];
    const filteredData = copyData.filter((data) => {
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
        <Header
          label={label}
          error={error}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          min={min}
          sec={sec}
        />
        <Main
          tasks={filteredData}
          editLabel={editLabel}
          onDeleted={this.deleteItem}
          onToggleComplete={this.onToggleComplete}
          onToggleEditing={this.onToggleEditing}
          onEditingSubmit={this.onEditingSubmit}
          closeEditing={this.closeEditing}
        />
        <Footer
          toDo={todoCount}
          currentFilter={filter}
          onFiltered={this.onFiltered}
          clearCompleted={this.clearCompleted}
        />
      </section>
    );
  }
}
