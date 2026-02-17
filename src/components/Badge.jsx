import React from "react";
import "../css/Badge.css";


export default function Badge({ items = [], className = "" }) {
  return (
    <div className={`badge-row ${className}`}>
      {items.map((item, i) => (
        <div className="badge-card" key={item.id ?? `${item.label}-${i}`}>
          <div className="badge-iconWrap">
            <img className="badge-icon" src={item.imgSrc} alt={item.alt ?? item.label} />
          </div>

          {/* <div className="badge-text">
            {item.topText ? <div className="badge-top">{item.topText}</div> : null}
            <div className="badge-label">{item.label}</div>
          </div> */}
        </div>
      ))}
    </div>
  );
}
