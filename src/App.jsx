import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import Portfolio from "./page/Portfolio";
import Contact from "./page/Contact";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;