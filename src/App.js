// import logo from './logo.svg';
import React from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import AboutUs from "./components/AboutUs";
import Features from "./components/features";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import CustomerLogos  from "./components/customerLogos";
import StatsSection from "./components/statsSection";
import Ourservices from "./components/ourservices";
// import GoogleReviews from "./components/googleReviews";

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Ourservices />
      <AboutUs />
      <Features />
      <StatsSection />
      <Testimonials />
      {/* <GoogleReviews /> */}
      <CustomerLogos />
      <Footer />
      
    </div>
  );
};

export default App;

