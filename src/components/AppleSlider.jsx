import React, { useState, useEffect } from "react";
import "./Applecss/Slider.css";

const images = [
  "https://is1-ssl.mzstatic.com/image/thumb/ie2RoKhs3MVe_Jon4mcDDQ/2400x1350sr.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/5fF2vNTh4Bo1hT1Mcbmggw/2400x1350sr.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/qEO2ivDk7pTF8wJQlJ-QDw/2400x1350sr.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/xEIxiIVRDqaFJ3H3pTGczQ/2400x1350sr.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/ewTmjVKfbT1AIvsqh1hzvQ/2400x1350sr.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/F-z8Gn_LdDENAz5GQG4ZTA/2400x1350sr.webp"
];

function AppSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="slider-container">

        {/* Slider Track */}
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img key={i} src={img} className="slide-image" alt="slide" />
          ))}
        </div>

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
    </div>
  );
}

export default AppSlider;



