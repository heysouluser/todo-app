import { React, Component } from 'react';
import './app.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

export default class App extends Component {

   state = {
      todoData: [
         { task: 'Completed task', id: 1, completed: false },
         { task: 'Editing task', id: 2, completed: false },
         { task: 'Active task', id: 3, completed: false },
      ]
   };

   deleteItem = (id) => {
      this.setState(({ todoData }) => {
         const idx = todoData.findIndex(el => el.id === id);
         const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
         return {
            todoData: newArr
         }
      })
   }

   render() {
      return (
         <section className='todoapp'>
            <Header />
            <Main
               tasks={this.state.todoData}
               onDeleted={this.deleteItem}
            />
            <Footer />
         </section>
      );
   }
}