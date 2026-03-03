// WhoWeAre.jsx
import React, { useEffect, useMemo, useState } from "react";


import "../css/whoWeAre.css"

export default function WhoWeAre({
  titleTop = "YOUR GO-TO SPOT FOR EVERYTHING",
  titleBottom = "CANNABIS",
  intervalMs = 2000,
}) {
  const slides = useMemo(
    () => [
      { word: "Premium", sub: "Flower • Edibles • Extracts • & More" },
      { word: "Local", sub: "Lynnwood • Monroe" },
      { word: "Trusted", sub: "Friendly budtenders" },
      { word: "Fresh", sub: "New drops weekly" },
      { word: "Deals", sub: "Select Brand Discounts" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("out");

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setPhase("in");
      }, 260);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs, slides.length]);

  const active = slides[index];

  return (
    <section className="whoWeAre">
      <div className="whoWeAre-inner">

        {/* LEFT - ROTATING CARD */}
        <div className="whoWeAre-left">
          <div className={`whoWeAre-word ${phase}`}>
            {active.word}
          </div>
          <div className={`whoWeAre-sub ${phase}`}>
            {active.sub}
          </div>
        </div>

        {/* RIGHT - HEADLINE */}
        <div className="whoWeAre-right">
          <div className="whoWeAre-kicker">{titleTop}</div>
          <div className="whoWeAre-titleBottom">{titleBottom}</div>
        </div>

      </div>
    </section>
  );
}