import React from "react";
import "../css/CannabisDestination.css"

export default function CannabisDestination() {
 return (
    <section className="about">
      {/* Background image set in CSS */}
      <div className="about__overlay" />

      <div className="about__content">
        <h2 className="about__title">
          YOUR DESTINATION FOR <br />
          PREMIUM <span className="about__accent">CANNABIS</span>
        </h2>

        <p className="about__text">
          Step into a higher standard of cannabis. From carefully selected flower
          to refined concentrates and edibles, our menu is curated for those who
          appreciate quality, consistency, and variety. Whether you’re unwinding
          after a long day or exploring something new, this is where premium lives.
        </p>
      </div>
    </section>
  );
}
