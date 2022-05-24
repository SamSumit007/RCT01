import React, { useState } from "react";
import TodoItem from "./todoitem";
import Styles from "./todo.css"
const Todo = () => {
    let [value, setValue] = useState("");
    const [todos, setTodos] =useState([]);
    const onDelete =(id) =>{
        let newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    const handleChange=(e)=>{
        setValue (e.target.value)
    }

    return(
        <div>
            Todo
            <input value={value} onChange={handleChange} 
            onKeyDownCapture={(e) => {
                if(e.key==="Enter"){
                    setTodos([...todos, {value: value}])
                    setValue("");   
                }
            }}/>
            <button onClick={() => {
               
                 setTodos([...todos, {value: value}])
                 setValue("");
                 }}>Add</button>
                 <div className={Styles.todo}>
        {todos.map((todo)=>(
            
               <TodoItem key={todo.id} todo={todo} onDelete={onDelete}   />
            
           
        ))}


</div>
        </div>
    )


}
export default Todo;