import React from 'react';
import './app.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const App = () => {

   const taskData = [
      { task: 'Completed task', id: 1, completed: true, editing: false },
      { task: 'Editing task', id: 2, completed: false, editing: true },
      { task: 'Active task', id: 3, completed: false, editing: false },
   ]

   return (
      <section className='todoapp'>
         <Header />
         <Main tasks={taskData} />
         <Footer />
      </section>
   );
}

export default App;