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
      ]
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

   onToggleComplete = (id) => {
      this.setState(({ todoData }) => {
         const idx = todoData.findIndex(el => el.id === id);
         // update object
         const oldItem = todoData[idx];
         const newItem = {
            ...oldItem,
            completed: !oldItem.completed
         };
         // construct new array
         const newArr = [...todoData.slice(0, idx),
            newItem,
         ...todoData.slice(idx + 1)
         ];

         return {
            todoData: newArr
         }
      })
   };

   render() {
      return (
         <section className='todoapp'>
            <Header />
            <Main
               tasks={this.state.todoData}
               onDeleted={this.deleteItem}
               onToggleComplete={this.onToggleComplete}
            />
            <Footer />
         </section>
      );
   }
}