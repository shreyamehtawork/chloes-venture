import React from "react";
import "../styles/About.css";
import logo from "../assets/logofinal.png";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section-about text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">ABOUT US</h1>
          <p className="lead mt-3">THE VISION BEHIND THE CHLOE'S</p>
        </div>
      </section>

      {/* About Chloe Section */}
      <section className="about-chloe-section py-5 ">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title fw-bold">Meet Chloe</h2>
          </div>

          <div className="row align-items-start justify-content-center g-5">
            {/* Left: Chloe Meaning */}
            <div className="col-lg-4">
              <div className="chloe-description pe-lg-4">
                <h5 className=" mb-3 title-desc">
                  The Meaning Behind the Name
                </h5>
                <p>
                  <strong>Chloe</strong> is more than just a name — it’s a quiet
                  symbol of calm elegance, organic growth, and creative rebirth.
                </p>
                <p>
                  Derived from the Greek <em>Khloē</em>, meaning “blooming”,
                  Chloe reflects the core values of this venture — intentional,
                  evolving, and beautiful by nature.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="logo-mark mt-5">
                <img src={logo} alt="Chloe Logo" className="logo-faded" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="chloe-values ps-lg-4">
                <h5 className="title-desc mb-3">What the “C” Stands For</h5>
                <p>
                  <span className="letter">C</span> is for{" "}
                  <strong>Creative</strong> — Ideas with emotion.
                </p>
                <p>
                  <span className="letter">C</span> is for{" "}
                  <strong>Custom</strong> — Design, made for you.
                </p>
                <p>
                  <span className="letter">C</span> is for{" "}
                  <strong>Curated</strong> — Intentional and refined.
                </p>
                <p>
                  <span className="letter">C</span> is for{" "}
                  <strong>Conscious</strong> — Rooted in values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section text-center">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="row mt-5 g-5 justify-content-center">
            <div className="col-md-4">
              <h4>Authenticity</h4>
              <p>Real emotion. Honest moments. Thoughtful simplicity.</p>
            </div>
            <div className="col-md-4">
              <h4>Artistry</h4>
              <p>Editorial visuals blended with timeless design.</p>
            </div>
            <div className="col-md-4">
              <h4>Connection</h4>
              <p>Creating with care, soul, and shared understanding.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
