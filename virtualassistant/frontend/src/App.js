import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';



function App() {
  return (
    <Routes>
            
    <Route path="/" element={<Home/>} />
    <Route path="/services" element={<Home/>} />
    <Route path="/prices" element={<Home/>}/ >
    
  </Routes>
  );
}

export default App;
