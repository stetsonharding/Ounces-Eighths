import dog from "../assets/dog.png";
import ada from "../assets/ada.png";
import atm from "../assets/atm.png";
import Badge from "./Badge";
import "../css/BadgeRow.css";

export default function BadgeRow() {
  return (
    <section className="badgeSection">
      {/* TOP WAVE */}
      <div className="badgeSection__wave badgeSection__wave--top" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C240,110 480,110 720,64 C960,18 1200,18 1440,64 L1440,0 L0,0 Z"
            fill="#000"
          />
        </svg>
      </div>

      <div className="badgeSection__shards" aria-hidden="true" />
      <div className="badgeSection__sweep" aria-hidden="true" />

      <Badge
        items={[
          { label: "Dog Friendly", imgSrc: dog },
          { topText: "ADA", label: "Accessible", imgSrc: ada },
          { label: "On-site ATM", imgSrc: atm },
        ]}
      />

      {/* BOTTOM WAVE */}
      <div className="badgeSection__wave badgeSection__wave--bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C240,110 480,110 720,64 C960,18 1200,18 1440,64 L1440,0 L0,0 Z"
            fill="#000"
          />
        </svg>
      </div>
    </section>
  );
}
