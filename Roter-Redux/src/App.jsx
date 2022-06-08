import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import TodoApp from './pages/TodoApp';
import CounterApp from './pages/CounterApp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<CounterApp /> } />
        <Route path='/todoapp' element={<TodoApp /> } />
      </Routes>
    </div>
  );
}

export default App;
