import { useReducer, useState } from 'react';

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_COMPLETE: 'toggle-complete',
    DELETE_TODO: 'delete-todo'
  }

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:      
        return{
          ...state,
          todos: [...state.todos, {
            id:Date.now(),      
           complete:false,        
           text: action.payload.text
          }]
        };
     
       case ACTIONS.TOGGLE_COMPLETE: 
         return{
             ...state,
            todos: state.todos.map(todo => todo.id === action.payload.id
            ? {...todo, complete: !todo.complete} 
            : todo
            )
       };
       case ACTIONS.DELETE_TODO: 
         return{
             ...state,
            todos: state.todos.map(todo => todo.id === action.payload.id
            ? {...todo, delete: todo.id} 
            : todo
            )
       };
      default:
        return state;
    }
  }
  
  export default function Todos() {
    const [text, setText] = useState('');

    const [state, dispatch] = useReducer(reducer, {todos: []});
    const {todos} = state;      

    
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({type: ACTIONS.ADD_TODO,
              payload: {text}  
      });
      setText('');
    }
  
    return (
      <>

        <div className='todos'>
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
          <button>SUBMIT</button>
          </form>
          <ul>
          {todos.map(todo => <Todo id={todo.id} complete={todo.complete} delete={todo.id} text={todo.text} dispatch={dispatch} key={todo.id}/>)}
          </ul>
        </div>
  
      </>
    );
  
    }
    export function Todo({id, complete, text, dispatch}){
          return(

            <li>          
              <a style={complete ? {'textDecoration' : 'line-through'} : {}} href={'#'} onClick={() => 
          
              dispatch({
                type: ACTIONS.TOGGLE_COMPLETE,
                 payload: {id}
                })
                }>
                    {text}
              </a>
              
            </li>
          )
      }
    