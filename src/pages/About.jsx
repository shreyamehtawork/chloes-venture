import React from "react";
import Navbar from "../components/Navbar";
import GrainyBackground from "../styles/GrainyBg/GrainyBg";
import "../styles/About.css";

function About() {
  return (
    <GrainyBackground>
      <Navbar />

      <div className="about-container container text-center ">
        <h1 className="display-4 mb-4">About Us</h1>
        <h3 className="lead mb-5" style={{ color: " #6b0f1a" }}>
          “The Vision Behind Chloe’s”
        </h3>

        <div className="about-section bg-overlay p-4 rounded">
          <p>
            <strong>Chloe</strong> is more than just a name — it represents the
            heart of our brand. <br></br>In Greek, “Chloe” means
            <em>“blooming”</em> or <em>“fertility”</em>, a perfect symbol for
            growth, beauty, and creativity.
          </p>
          <p className="mt-4">
            The <strong>“C”</strong> in Chloe stands for everything we believe
            in:
          </p>
          <ul className="about-list mt-3">
            <li>
              <strong>Creative</strong> – every detail thoughtfully imagined
            </li>
            <li>
              <strong>Custom</strong> – tailored to your story
            </li>
            <li>
              <strong>Curated</strong> – a collection with purpose and beauty
            </li>
            <li>
              <strong>Chic</strong> – timeless elegance
            </li>
          </ul>
        </div>
      </div>
    </GrainyBackground>
  );
}

export default About;
