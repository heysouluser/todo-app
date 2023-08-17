import { React, Component } from 'react';
import './app.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

export default class App extends Component {

   maxId = 1;

   state = {
      todoData: [
         this.createTodoItem('Completed task'),
         this.createTodoItem('Editing task'),
         this.createTodoItem('Active task'),
      ],
      filter: 'All',
      label: '',
      editLabel: '',
      error: null
   };

   createTodoItem(task) {
      return {
         task,
         id: this.maxId++,
         completed: false,
         editing: false,
         date: new Date()
      }
   }

   deleteItem = (id) => {
      this.setState(({ todoData }) => {
         return {
            todoData: todoData.filter(t => t.id !== id)
         }
      });
   };

   addItem = (text) => {
      const newItem = this.createTodoItem(text);
      if (text.trim() !== '') {
         this.setState(({ todoData }) => {
            const newArr = [
               ...todoData,
               newItem
            ];
            return {
               todoData: newArr
            }
         })
      } else {
         this.setState({
            error: 'Необходимо заполнить поле'
         })
      }
   }

   toggleProperty = (arr, id, prop) => {
      const idx = arr.findIndex(el => el.id === id);
      const oldItem = arr[idx];
      const newItem = {
         ...oldItem,
         [prop]: !oldItem[prop]
      };

      return [...arr.slice(0, idx),
         newItem,
      ...arr.slice(idx + 1)
      ];
   }

   onToggleComplete = (id) => {
      this.setState(({ todoData }) => {
         return {
            todoData: this.toggleProperty(todoData, id, 'completed')
         }
      })
   };

   onToggleEditing = (id) => {
      this.setState(({ todoData }) => {
         return {
            todoData: this.toggleProperty(todoData, id, 'editing')
         }
      })
   }

   onLabelChange = (e) => {
      this.setState({
         label: e.target.value,
         error: null
      })
   }

   onSubmit = (e) => {
      e.preventDefault();
      this.addItem(this.state.label);
      this.setState({
         label: ''
      })
   }

   onFiltered = (e) => {
      const filter = e.target.textContent;
      this.setState({ filter });
   };

   clearCompleted = () => {
      this.setState(({ todoData }) => {
         return {
            todoData: todoData.filter(item => item.completed !== true)
         }
      })
   }

   onEditLabelChange = (e) => {
      this.setState({
         editLabel: e.target.value
      })
   }

   onEditingSubmit = (e, id) => {
      e.preventDefault();

      this.setState(({ todoData }) => {
         const newLabel = todoData.map((item) => {
            if (item.id === id) {
               return {
                  ...item,
                  task: this.state.editLabel,
                  editing: false,
               };
            }
            return item;
         });
         return {
            todoData: newLabel,
            editLabel: '',
         };
      });
   }

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
   }

   render() {
      const { todoData, filter, label, editLabel, error } = this.state;

      const doneCount = todoData.filter(el => el.completed).length;
      const todoCount = todoData.length - doneCount;
      const copyData = [...todoData];
      let filteredData = copyData.filter(data => {
         switch (filter) {
            case 'Active':
               return !data.completed;
            case 'Completed':
               return data.completed;
            default:
               return data;
         }
      })


      return (
         <section className='todoapp'>
            <Header
               label={label}
               error={error}
               onLabelChange={this.onLabelChange}
               onSubmit={this.onSubmit}
            />
            <Main
               tasks={filteredData}
               editLabel={editLabel}
               onDeleted={this.deleteItem}
               onToggleComplete={this.onToggleComplete}
               onToggleEditing={this.onToggleEditing}
               onEditLabelChange={this.onEditLabelChange}
               onEditingSubmit={this.onEditingSubmit}
               closeEditing={this.closeEditing}
            />
            <Footer
               toDo={todoCount}
               currentFilter={filter}
               onFiltered={this.onFiltered}
               clearCompleted={this.clearCompleted} />
         </section>
      );
   }
}