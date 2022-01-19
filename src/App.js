import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import ListForm from './components/ListForm';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar';

function App() {
const [todos,setTodos]= useState([]);

const addTodoHandler=(todo)=>{
setTodos([todo,...todos]);
};

const removeTodoHandler =(id)=>{
setTodos(todos.filter(todo=>todo.id !== id));
};
const todoStatusHandler =(id)=>{
  setTodos(
    todos.map(todo=>{
      if(todo.id===id){
        return {...todo,status: true};
      }
      return todo;
    })
    );
};
const todoFalseHandler =(id)=>{
  setTodos(
    todos.map(todo=>{
      if(todo.id===id){
        return {...todo,status: false};
      }
      return todo;
    })
    );
};
useEffect(()=>{
   const list = localStorage.getItem("todo-list");
   if(list){
     setTodos(JSON.parse(list));
   }
},[]);
useEffect(()=>{
  localStorage.setItem("todo-list",JSON.stringify(todos));
}
);

  return (
    <div className='cont'>
      <div className='cont-inside'>
      <header>
        <NavBar/>
        <ListForm add={addTodoHandler} />
        <TodoList val={todos} remove={removeTodoHandler} check={todoStatusHandler} checkFalse={todoFalseHandler}/>
        
      </header>
      </div>
    </div>
  );
}

export default App;
