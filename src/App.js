import React from 'react';
import Navbar from './Front-end/Navbar';
import Slider from './Front-end/Slider';
import Body from './Front-end/Body';
import Footer from './Front-end/Footer';
import './bootstrap/dist/css/bootstrap.min.css';

function App () {
    return (
      <div className="App">
        <Navbar/>
        <Slider/>
        <Body/>
        <Footer/>
      </div>
    );
}

export default App;
