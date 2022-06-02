import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Feeds from './Components/Feeds';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import Reqauth from './hoc/Reqauth';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='login' element={<Login />} />
    <Route path='feeds' element={ 
    <Reqauth><Feeds /></Reqauth>} />
       <Route path='post' element={ 
    <Reqauth><Post /></Reqauth>} />
    
      </Routes>
    </div>
  );
}

export default App;
