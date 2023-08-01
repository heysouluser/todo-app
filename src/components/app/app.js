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
   };

   createTodoItem(task) {
      return {
         task,
         id: this.maxId++,
         completed: false,
         editing: false,
      }
   }

   deleteItem = (id) => {
      this.setState(({ todoData }) => {
         const idx = todoData.findIndex(el => el.id === id);
         const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
         return {
            todoData: newArr
         }
      });
   };

   addItem = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({ todoData }) => {
         const newArr = [
            ...todoData,
            newItem
         ];
         return {
            todoData: newArr
         }
      })
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


   render() {
      const { todoData, filter } = this.state;

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
            <Header onAdded={this.addItem} />
            <Main
               tasks={filteredData}
               onDeleted={this.deleteItem}
               onToggleComplete={this.onToggleComplete}
               onToggleEditing={this.onToggleEditing}
            />
            <Footer
               toDo={todoCount}
               filter={filter}
               onFiltered={this.onFiltered}
               clearCompleted={this.clearCompleted} />
         </section>
      );
   }
}