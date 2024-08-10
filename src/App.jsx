// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Components/Contact";
import Program from "./Components/Program";
import ServicesPage from "./Components/ServicesPage";
import ProductsPage from "./Components/ProductsPage";
import Blog from "./Components/Blog";
import Careers from "./Components/Careers";
import AboutPage from "./Components/AboutPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
