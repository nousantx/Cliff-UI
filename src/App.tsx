import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import useStyles from "./utils/useStyles";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { NotFound } from "./pages/NotFound";
import Components from "./pages/Components";

const App: React.FC = () => {
  useStyles();
  // app
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/component" element={<Components />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
