import { useContext, useReducer } from 'react';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import { ThemeContext } from './context/ThemeContext';


const reducer = (counter, action)=> {
  switch (action.type) {
    case 'increment':{
      return counter + 1;}
    case 'decrement':{
      return counter - 1;}
    default:{
      return counter
    }
  }
}
function App() {
  const [counter, dispatch] = useReducer(reducer, 0);
const {isLight} = useContext(ThemeContext);

  return (
    <div className={`App ${isLight ?"Light" : "Dark" }`}>
      <div>
      Counter: {counter}
      <div>
        <button onClick={() => dispatch({type:'increment' })}>+</button>
        <button onClick={() => dispatch({type:'decrement' })}>-</button>
      </div>
      </div>
      <div>
        
      <Navbar />
    <Body />
      </div>
    </div>
  );
}

export default App;
