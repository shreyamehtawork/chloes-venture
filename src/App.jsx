import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";
import Products from "./pages/Products";
import SingleProductsView from "./pages/SingleProductView";
import About from "./pages/About";
import Footer from "./components/Footer";
import Fashion from "./pages/Fashion";
import Decor from "./pages/Decor";
import Pet from "./pages/Pet";
import Beauty from "./pages/Beauty";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route
          exact
          path="/products/singleproductspage"
          element={<SingleProductsView />}
        />
        <Route exact path="/fashion" element={<Fashion />} />
        <Route exact path="/decor" element={<Decor />} />
        <Route exact path="/pet" element={<Pet />} />
        <Route exact path="/beauty" element={<Beauty />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
