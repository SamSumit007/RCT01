import './App.css';
import Hello from './components/hello';
import Answer from './components/Answers';

function App() {
let info = [
  {name: "Sumit", place:"India"},
  {name: "Sam", place:"Aus"},
  {name: "Thakur", place:"US"},
];


  return (
    <div className="App">
      
        
        <Hello /> 
       
        
    <h1>New: 1</h1>
    {info.map((user) => (
      <div>
        <Answer {...user}  />
      </div>
    ))}

    </div>
  );
}

export default App;

