import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import StudentPerformance from './components/prob1';

import './App.css';

function App(){
    const [cartCount, setCartCounter] = useState(0);
    function addToCart(){
      setCartCounter(cartCount+1)
    }

  return (
    <BrowserRouter>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/prob1" element={<StudentPerformance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
} // JSX

export default App;