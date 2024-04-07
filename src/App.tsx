import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useStyles } from "./utils/styles";
import About from "./pages/About";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { NotFound } from "./pages/NotFound";

const App: React.FC = () => {
  useStyles();
  // app
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
