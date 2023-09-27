// App.js
import React from 'react';
import Navbar from './Front-end/Navbar';
import Slider from './Front-end/Slider'; 
import Footer from './Front-end/Footer';
import Body from './Front-end/Body';
import './css/style.css';
import './bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
    <Navbar/>
    <Slider />
    <Body/>
    <Footer/>
  </div>
  );
}
export default App;
