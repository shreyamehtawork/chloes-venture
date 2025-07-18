import React from "react";
import image1 from "../assets/image1.jpg";
import "../styles/EditorsPicks.css";

const cardImages = [image1, image1, image1, image1, image1];

const EditorsPicks = () => {
  const total = cardImages.length;
  const center = Math.floor(total / 2);
  const angleSpread = 60; // total angle spread (degrees)
  const translateXBase = 220; // horizontal distance between cards
  const curveDepth = 70; // vertical offset for curve

  return (
    <div>
      <div className="monclos-container pb-2">
        {/* <h2 className="text-white sections-heading ">featured</h2> */}
        {/* <h2 className="editors-heading text-white">EDITORS PICKS</h2> */}

        <div className="card-deck">
          {cardImages.map((img, idx) => {
            const angle = (idx - center) * (angleSpread / (total - 1));
            const translateX = (idx - center) * translateXBase;
            const curveOffset =
              Math.pow(idx - center, 2) * (curveDepth / (total - 1));

            return (
              <img
                key={idx}
                src={img}
                alt={`Monclos ${idx}`}
                className="monclos-card"
                style={{
                  transform: `translate(-50%, 0) translateX(${translateX}px) translateY(${curveOffset}px) rotate(${angle}deg)`,
                  left: "50%",
                  zIndex: 100 - Math.abs(idx - center),
                }}
              />
            );
          })}

          <h3 className="editors-heading pb-3">EDITOR'S PICKS</h3>
        </div>
      </div>
    </div>
  );
};

export default EditorsPicks;
