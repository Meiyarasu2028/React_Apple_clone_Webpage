import React, { useState } from "react";
import "./Applecss/Slider.css";

const images = ["https://is1-ssl.mzstatic.com/image/thumb/ie2RoKhs3MVe_Jon4mcDDQ/2400x1350sr.webp","https://is1-ssl.mzstatic.com/image/thumb/5fF2vNTh4Bo1hT1Mcbmggw/2400x1350sr.webp","https://is1-ssl.mzstatic.com/image/thumb/qEO2ivDk7pTF8wJQlJ-QDw/2400x1350sr.webp","https://is1-ssl.mzstatic.com/image/thumb/xEIxiIVRDqaFJ3H3pTGczQ/2400x1350sr.webp","https://is1-ssl.mzstatic.com/image/thumb/xgmyxKCnxBEpCJmLwQc2sg/2400x1350sr.webp","https://is1-ssl.mzstatic.com/image/thumb/xgmyxKCnxBEpCJmLwQc2sg/2400x1350sr.webp","https://is1-ssl.mzstatic.com/image/thumb/zaxin710Cia1XCPsrs3-iQ/2400x1350sr.webp",""];

function AppSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="slider-container">
      <img src={images[index]} alt="slide" className="slide-image" />

      {/* Dots */}
      <div className="slider-dots">
        {images.map((_, i) => (
          <div
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default AppSlider;

