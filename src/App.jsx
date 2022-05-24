import { useEffect, useState } from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  //const [showcomponent, setshowcomponent] = useState();

  const [count, setCount] = useState(0);
   const [count1, setCount1] = useState(0);
 

fetch("http://localhost:8080/todos")
.then((r) => r.json())
.then((d)=> {
  console.log(d);
});
  useEffect ( ()=>{
    console.log("in 1", count, count1);
  })
  

// let A = ()=>{
   

// <div onClick={setcount(count+1)}>comp A{count}</div>
// }
// let B = ()=> <div>comp B</div>r

  return (
    <div className="App">
    <div  
    
      onClick={()=>setCount(count+1)}
    >
    counter1: {count}
    
    </div>
    <div 
    
    onClick={()=>setCount1(count1+2)}
  >
  counter2: {count1}
  
  </div>
    <Todos />



  </div>

  );
}

export default App;



// <div>
//     {showcomponent ? <A/>: <B/>}
//     </div>
