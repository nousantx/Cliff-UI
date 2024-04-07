import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useStyles } from "./utils/styles";
import About from "./pages/About";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  useStyles();
  // app
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="*"
          element={
            <section className="center bg-neutral-900">
              <h1 className="text-danger-500">Not Found</h1>
            </section>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
