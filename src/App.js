import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from "./Components/Footer";

import Menu from "./Components/Menu";
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';
import Product from './Components/Product';




function App() {
  return (
    <div>
   <Menu />
    <ImageSlider slides={SliderData} />
    <Product />
   
      
      <Footer/>
      
    </div>
  );
}

export default App;