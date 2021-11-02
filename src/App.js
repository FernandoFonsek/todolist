import React, { useState, useEffect } from 'react';

import './App.css';
import Filter from './components/filter';
import Form from './components/form';
import Header from './components/header';
import Loader from './components/loader';
import Todo from './components/todo';
// import TodoList from './components/todolist';

function App() {

//state
const [todoList, setTodoList] = useState(null);
const [filterData, setFilterData] = useState(null);
const [stateFilter, setStateFilter] = useState("all");


//effect
useEffect(()=>{
  const handleTodoList = async () =>{
     const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
     )
     const result = await response.json();
     const resultTodilist = result.slice(0,20);
     setFilterData(resultTodilist);
     setTodoList(resultTodilist);
     
  };
  handleTodoList();
  
},[]);

//function
const handleCompleteTodo = (id) =>{

  setTodoList (
    todoList.map(todo => 
    todo.id === id ? {...todo, completed: !todo.completed}: todo
    )
  );

  setFilterData (
    filterData.map(todo => 
    todo.id === id ? {...todo, completed: !todo.completed}: todo
    )
  );
  };

//function filter

const handleFilter = (fil)  => { // "all" "completed" "reser"

  if(fil === "all"){
    setStateFilter(fil);
    setFilterData(todoList);
  }
  else if(fil === "completed"){
    
    setStateFilter(fil);
    setFilterData(
      todoList.filter(filtro => 
        filtro.completed === false )
      )

  }
  else if(fil === "reset"){
    setStateFilter(fil);
    setFilterData(
      todoList.filter(filtro => 
        filtro.completed === true )
      )
  }
  }

useEffect(() => {
handleFilter(stateFilter)
}, [todoList]);

  return (
    <div> 
    <Header/>
    <Filter
      handleFilter={handleFilter}
      focoState={stateFilter}
    />
    <Form 
    />

{filterData && filterData.length > 0 ? (
      filterData.map(singleTodo => (
        <Todo
        key={singleTodo.id}
        title={singleTodo.title}
        status={singleTodo.completed}
         handleCompleteTodo={handleCompleteTodo}
        id={singleTodo.id}
          />
      ))
    ) : (
      <Loader/>
    )}
    </div>
  );
}

export default App;
