import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Products from './Components/Products';


function App() {
 

  return (
    <div className= "App" >
        
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='products' element={<Products />}/>
      <Route path='products/*' element={<Products />}/>
      <Route path=":id" element={<Product />}/>
    </Routes>
      </div>
    
  );
}

export default App;
