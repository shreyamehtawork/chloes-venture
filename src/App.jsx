import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
