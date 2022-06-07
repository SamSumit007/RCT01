import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
 // const [count, setCount] = useState(0)
const dispatch = useDispatch();

const count = useSelector((state) => state.count)
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({type: "susbstract" })}>-</button>
      <button onClick={() => dispatch({type: "add" })}>+</button>
    </div>
  );
}

export default App;
