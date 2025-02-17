// import logo from './logo.svg';
import React from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import AboutUs from "./components/AboutUs";
import Features from "./components/features";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutUs />
      <Features />
      <Testimonials />

      <Footer />
      
    </div>
  );
};

export default App;

