import React from 'react';
import './App.css';

// components
import TodoList from './components/todoList'
import TodoInput from './components/todoInput'

import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput />
          <TodoList />
        </div>
      </div>
      
    </div>
  );
}

export default App;
