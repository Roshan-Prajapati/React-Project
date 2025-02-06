// import logo from './logo.svg';
import React from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import AboutUs from "./components/AboutUs";
import Footer from "./components/footer";

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutUs />
      <Footer />
      
    </div>
  );
};

export default App;

