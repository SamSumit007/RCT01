import React, { useState } from "react";
import Styles from "./todo.css"

const TodoItem = ({todo, onDelete}) =>{
  const [isCopleted, setIsCompleted] = useState(todo.isCopleted);
  return(


    <div className={Styles.todo} key={todo.id}>

    <input type="checkbox" checked={isCopleted}
    
    onChange={(e) => {
        setIsCompleted(e.target.checked)
    }}/>
    <div className={isCopleted ? Styles.striked : ""}>{todo.value}</div>
    <button onClick={ ()=> onDelete(todo.id)}>Delete</button>
    </div>
  )
}
export default TodoItem