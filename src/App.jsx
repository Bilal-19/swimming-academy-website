import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Gallery from "./Pages/Gallery";
import Testimonials from "./Pages/Testimonials";
import FAQ from "./Pages/FAQs";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/faqs" element={<FAQ />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
