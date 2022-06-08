import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { todoAdd } from '../Store/Action';

const TodoApp = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const todos = useSelector((state) =>state.todo.todos);
const addNew =() =>{
    let value = ref.current.value;
    dispatch(todoAdd({
        value: value,
        isCompleted: false,
    }))
}
  return (
    <div> <h1>TodoApp:</h1>
 <input type="text" ref={ref}  placeholder='Entertodo..' />
 <br />
 <button onClick={addNew} >Add Todo</button>
 <br />
 <br />
 <br />
 {todos.map((todo)=>(
     <div key={todo.id}>{todo.value}</div>
 ))}
    </div>
  )
}

export default TodoApp