import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newtodo, setnewtodo] = useState("");

   const saveinfo =()=>{
    fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
    body: JSON.stringify({
        value: newtodo,
        isCompleted: false,

    })
    })
    .then((r) => r.json())
    .then((d)=> {
      setTodos([...todos, d]);
      setnewtodo("")
    });

   };

useEffect ( ()=>{
    fetch("http://localhost:8080/todos")
    .then((r) => r.json())
    .then((d)=> {
      setTodos(d);
    });
  }, [])
  return (
    <div>Todos
    <div> 
        <div>
        <input value={newtodo}
        onChange={({target}) => setnewtodo(target.value)}/>
        <button onClick={saveinfo}>+</button>
        </div>
        {todos.map((todo) => {
        return <div key={todo.id}>{todo.value}</div>
    })}
       
        </div>
        </div>
  )
}

export default Todos