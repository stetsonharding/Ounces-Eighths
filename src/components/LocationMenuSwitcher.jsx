import React, { useState } from "react";
import "../css/LocationMenuSwitcher.css"

const LOCATIONS = [
  {
    id: "monroe",
    name: "Monroe",
    label: "Ounces & Eighths - Monroe",
    menuUrl: "https://selection.thekushery.rocks/orderOnline/monroe/menu",
  },
  // {
  //   id: "lynnwood",
  //   name: "Lynnwood",
  //   label: "Ounces & Eighths - Lynnwood",
  //   menuUrl: "https://your-lynnwood-menu-link.com",
  // },
];

const LocationMenuSwitcher = () => {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);

  const handleChange = (e) => {
    const newLocation = LOCATIONS.find(
      (location) => location.id === e.target.value
    );
    setSelectedLocation(newLocation);
  };

  return (
    <section className="menu-switcher">
      <div className="menu-switcher__top">
        <div className="menu-switcher__text">
          <p className="menu-switcher__eyebrow">Choose your location</p>
          <h2 className="menu-switcher__title">{selectedLocation.label}</h2>
        </div>

        <div className="menu-switcher__control">
          <label htmlFor="location-select" className="menu-switcher__label">
            Store
          </label>
          <select
            id="location-select"
            className="menu-switcher__select"
            value={selectedLocation.id}
            onChange={handleChange}
          >
            {LOCATIONS.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="menu-switcher__frame-wrap">
        <iframe
          key={selectedLocation.id}
          title={`${selectedLocation.name} Menu`}
          src={selectedLocation.menuUrl}
          className="menu-switcher__frame"
        />
      </div>
    </section>
  );
};

export default LocationMenuSwitcher;