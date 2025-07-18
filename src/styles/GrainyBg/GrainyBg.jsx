// src/GrainyBackground.jsx
import React from "react";
import "../GrainyBg/grainybg.css";

const GrainyBackground = ({ children }) => (
  <div className="grainy-bg">{children}</div>
);

export default GrainyBackground;
