import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Insidenavy from './pages/Insidenavy';
import Career from './pages/Career';


function App() {
    return (
      
        <Router>
            <nav>
                <img src="aboutbody.jpg" alt="loading"/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/insidenavy">Insidenavy
                    <select>
                      <option></option>
                      <option>Life at see</option>
                      <option>Life on submarine</option>
                      <option>Life in the squardan</option>
                      <option>Life on Ship</option>
                      <option>Life at see</option>
                      </select></Link></li>
                    <li><Link to="/career">Career</Link></li>
                    <button>Login</button>
                    
                </ul>
            </nav>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/insidenavy" element={<Insidenavy />} />
                <Route path="/career" element={<Career />} />
            </Routes>
        </Router>
       
    );
}

export default App;
