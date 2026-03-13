import React, { useEffect, useState } from "react";
import "../css/AgeGate.css";

import Logo from "../assets/O&ECircle.png"

export default function AgeGate({
  minAge = 21,
  storageKey = "age_verified_21_plus",
  title = "Are you 21 or older?",
  // logo = <span className="ageGateLogoText"></span>,
  logo = <img  className="ageGate_Logo" src={Logo} alt="Ouches & Eighths Logo"/>,
  onDenyRedirectUrl = "https://google.com", 
}) {
  const [open, setOpen] = useState(false);

useEffect(() => {
  const verified = window.sessionStorage.getItem(storageKey) === "true";
  if (!verified) setOpen(true);
}, [storageKey]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

const handleYes = () => {
  window.sessionStorage.setItem(storageKey, "true");
  setOpen(false);
}

  const handleNo = () => {
    if (onDenyRedirectUrl) {
      window.location.href = onDenyRedirectUrl;
      return;
    }
    // If no redirect, keep gate open (hard stop).
    setOpen(true);
  };

  if (!open) return null;

  return (
    <div className="ageGateOverlay" role="presentation">
      <div
        className="ageGateCard"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ageGateTitle"
      >
        {/* Logo area */}
        <div className="ageGateLogoArea" aria-label="Brand logo">
          {logo}
  
        </div>

        {/* Title */}
        <h2 id="ageGateTitle" className="ageGateTitle">
          {title}
        </h2>

        {/* Buttons */}
        <div className="ageGateButtons">
          <button className="ageGateBtn ageGateYes" onClick={handleYes} autoFocus>
            Yes
          </button>

          <button className="ageGateBtn ageGateNo" onClick={handleNo}>
            No
          </button>
        </div>

        <p className="ageGateFinePrint">You must be {minAge}+ to enter.</p>
      </div>
    </div>
  );
}