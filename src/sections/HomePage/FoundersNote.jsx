import React from "react";
import "../../styles/FoundersNote.css";

function FoundersNote() {
  return (
    <section className="founder-note">
      <div className="about-container container text-center">
        <div className="about-section bg-overlay p-5 rounded">
          <h1 className="display-4 mb-4">FOUNDER'S NOTE</h1>

          <h3 className="lead mb-4" style={{ color: "#e6b8a2" }}>
            “The Vision Behind Chloe’s”
          </h3>

          <p>
            <strong>Chloe</strong> is more than just a name — it represents the
            heart of our brand. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            iste repudiandae.
          </p>

          <p className="mt-4">Where my VISION meets your ELEGNACE !</p>
        </div>
      </div>
    </section>
  );
}

export default FoundersNote;
