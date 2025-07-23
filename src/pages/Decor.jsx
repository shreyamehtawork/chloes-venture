import React, { useState } from "react";
import "../styles/Decor.css";

import p1 from "../assets/products/p1.webp";
import p2 from "../assets/products/p2.webp";
import p3 from "../assets/products/p3.webp";
import p4 from "../assets/products/p4.webp";
import p5 from "../assets/products/p5.webp";
import p6 from "../assets/products/p6.webp";
import p7 from "../assets/products/p7.webp";
import p8 from "../assets/products/p8.webp";

export default function Decor() {
  const [selectedLabel, setSelectedLabel] = useState("clo-aura");

  const subLabels = [
    {
      id: "clo-aura",
      name: "Clo-Aura",
      tagline: "✨ Wear your light. Own your elegance.",
    },
    {
      id: "clo-prime",
      name: "Clo-Prime",
      tagline: "💼 Crafted for the man who leads.",
    },
    {
      id: "clo-pixie",
      name: "Clo-Pixie",
      tagline: "🌈 For the magic she carries within.",
    },
    {
      id: "clo-zion",
      name: "Clo-Zion",
      tagline: "⚡ Where style meets strength.",
    },
    {
      id: "clo-bear",
      name: "Clo-Bear",
      tagline: "🧸 Snuggled in softness. Styled with love.",
    },
  ];

  const products = [
    {
      name: "Elegant Dress",
      price: "$99",
      image: p1,
      label: "clo-aura",
    },
    {
      name: "Elegant Dress",
      price: "$99",
      image: p1,
      label: "clo-aura",
    },
    {
      name: "Elegant Dress",
      price: "$99",
      image: p1,
      label: "clo-aura",
    },
    {
      name: "Elegant Dress",
      price: "$99",
      image: p1,
      label: "clo-aura",
    },
    {
      name: "Elegant Dress",
      price: "$99",
      image: p1,
      label: "clo-aura",
    },
    {
      name: "Elegant Dress",
      price: "$99",
      image: p1,
      label: "clo-aura",
    },
    {
      name: "Elegant Dress",
      price: "$99",
      image: p1,
      label: "clo-aura",
    },
    {
      name: "Silk Scarf",
      price: "$59",
      image: p2,
      label: "clo-aura",
    },
    {
      name: "Power Suit",
      price: "$129",
      image: p2,
      label: "clo-prime",
    },
    {
      name: "Pixie Tee",
      price: "$49",
      image: p2,
      label: "clo-pixie",
    },
    {
      name: "Zion Jacket",
      price: "$89",
      image: p2,
      label: "clo-zion",
    },
    {
      name: "Bear Onesie",
      price: "$39",
      image: p2,
      label: "clo-bear",
    },
  ];

  const filteredProducts = products.filter((p) => p.label === selectedLabel);

  return (
    <div className="fashion-page">
      {/* Hero */}
      <section className="hero-section-decor text-white text-center d-flex align-items-center justify-content-center">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="display-4 fw-bold">Chloe’s Decor Collection</h1>
          <p className="sub-label-names">
            {subLabels.map((s, i) => (
              <span key={s.id}>
                {s.name}
                {i < subLabels.length - 1 && " | "}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Main Body */}
      <div>
        <div className="row flex-lg-nowrap">
          {/* Sidebar */}
          <aside className="col-lg-3">
            <div className="sidebar card shadow-sm border-0 p-4 bg-light">
              <h5 className="mb-3 text-muted">Colletions</h5>
              {subLabels.map((item) => (
                <button
                  key={item.id}
                  className={`btn w-100 text-start mb-2 ${
                    selectedLabel === item.id ? "btn-dark" : "btn-outline-dark"
                  }`}
                  onClick={() => setSelectedLabel(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Products */}
          <main className="col-lg-9 py-5 px-5">
            <h2 className="mb-2">
              {subLabels.find((l) => l.id === selectedLabel)?.name}
            </h2>
            <p className="text-muted fst-italic mb-4">
              {subLabels.find((l) => l.id === selectedLabel)?.tagline}
            </p>

            <div className="row ">
              {filteredProducts.map((product, index) => (
                <div className="col-6 col-md-4 col-lg-3 g-4 mb-5" key={index}>
                  <div className="product-card ">
                    <div className="arched-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid"
                      />
                    </div>
                    <h5 className="mt-3">{product.name}</h5>
                    <p className="price">{product.price}</p>

                    <button className="btn btn-outline-dark rounded-pill mt-0">
                      Shop Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <section className="footer-banner text-center text-white py-5">
        <div className="overlay"></div>
        <h2 className="fw-bold">Where Vision meets Elegance</h2>
        <p>CREATIVE | CUSTOM | CURATED | CONSCIOUS</p>
      </section>
    </div>
  );
}
