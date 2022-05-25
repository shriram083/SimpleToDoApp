import React, {useState} from 'react'
import styles from '../styles/TodoList.module.css'
const todoList = (props) => {
    let arr = props.list;

  return (
    <div className={styles.listBox}>
        <h1>Todo List</h1>
        <div >
            {
                arr.map((el,i)=> {
                    return (
                        <div key={el.id} className={el.isChecked ? styles.innerBox:styles.innerBoxC}>
                            <input type="checkbox" onChange={()=>props.chengeChecked(i)}/>
                            <h2 style={{textDecoration: el.isChecked ? 'line-through':'none'}}>         
                                {el.name}
                            </h2>
                            <button onClick={()=>props.decrement(i)}>-</button>
                            <h2>{el.qty}</h2>
                            <button onClick={()=>props.increment(i)}>+</button>
                            
                            <button className={styles.delete} onClick={()=>props.deleteTodo(el)}>Delete</button>
                        </div>
                    )
                })
            }           
        </div>
    </div>
  )
}

export default todoList