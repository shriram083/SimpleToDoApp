import React, { useState } from 'react';
import TodoInput from "./TodoInput";
import TodoList from './TodoList';;
import { v4 as uuidv4} from 'uuid';
import styles from '../styles/TodoApp.module.css';

const TodoApp = () => {
  const [list,setList] = useState([]);

  const addNew = (newTodo) => {
    let newList = [...list,
      { name:newTodo,
        id:uuidv4(),
        qty:1,
        isChecked:false,
      }]
    setList(newList)
    // console.log(newList);
  };

  const deleteTodo = (todoName) => {
    // console.log(todoName,list[0])
    let newList = list.filter((el)=> {return el != todoName})
    setList(newList)
  }

  const chengeChecked = (index) => {
    let newList = list.map((el,i)=>{
      if(index==i)
      {
        el.isChecked=(!el.isChecked);
      }
      return (
        el
      );
    })
    setList(newList)
  };
  const increment = (index) => {
    let newList = list.map((el,i)=>{ 
      if(index==i)
      {
        el.qty+=1;
      }
      return (
      el
    )  
    })
    setList(newList)
    // console.log(newList);
  }

  const decrement = (index) => {
    let newList = list.map((el,i)=>{ 
      if(index==i)
      {
        el.qty-=1;
      }
      return (
      el
    )  
    })
    setList(newList)
    // console.log(newList);
  }

  return (
    <div >
      <h1>My Todo App</h1>
      <TodoInput addNew={addNew}/>
      <TodoList 
          list={list}
          deleteTodo={deleteTodo}
          increment={increment}
          decrement={decrement}
          chengeChecked={chengeChecked}/>
    </div>
  )
}

export default TodoApp;