import React, { useEffect, useMemo, useState } from "react";

import Flower from "../assets/products/Flower.png";
import Edibles from "../assets/products/Edibles.png";
import Concentrates from "../assets/products/Concentrates.png";
import preRoll from "../assets/products/preRoll.png";
import Tinctures from "../assets/products/Tinctures.png";
import Topicals from "../assets/products/Topicals.png";
import Vape from "../assets/products/Vape.png";
import Deals from "../assets/products/deals.png"

const STORES = [
  { id: "lynnwood", label: "Lynnwood", address: "7531 196th St SW" },
  { id: "monroe", label: "Monroe", address: "16412 Trombley Rd" },
];

const CATEGORIES = [
  { key: "flower", label: "Flower", img: Flower },
  { key: "pre-roll", label: "Pre-Roll", img: preRoll },
  { key: "edible", label: "Edibles", img: Edibles },
  { key: "extract", label: "Extract", img: Concentrates },
  { key: "tincture", label: "Tinctures", img: Tinctures },
  { key: "topical", label: "Topicals", img: Topicals },
  { key: "vape", label: "Vape", img: Vape },
  { key: "deals", label: "Deals", img: Deals }


];

export default function CategoryCard() {
  const [storeId, setStoreId] = useState("lynnwood");
  const [isSwitching, setIsSwitching] = useState(false);

  const store = useMemo(() => STORES.find((s) => s.id === storeId), [storeId]);

  const switchStore = (nextStoreId) => {
    if (nextStoreId === storeId) return;
    setIsSwitching(true);
    setStoreId(nextStoreId);
  };

  // keep skeleton visible briefly so the switch feels real
  useEffect(() => {
    if (!isSwitching) return;
    const t = setTimeout(() => setIsSwitching(false), 650);
    return () => clearTimeout(t);
  }, [isSwitching]);

  const goToCategory = (catKey) => {
    if (isSwitching) return;

     window.open(
  `https://selection.thekushery.rocks/orderOnline/${storeId}/menu/${catKey}`,
  "_blank",
  "noopener,noreferrer"
);

    console.log(storeId, catKey);
  };

  return (
    <section className="shopCat">
      <h2 className="shopCat__title">Shop by Category</h2>

      <div className="shopCat__toggleWrap">
        <div className="shopCat__toggle">
          {STORES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => switchStore(s.id)}
              className={`shopCat__tab ${storeId === s.id ? "is-active" : ""}`}
              aria-pressed={storeId === s.id}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div
          className={`shopCat__switchPill ${isSwitching ? "is-show" : ""}`}
          aria-live="polite"
        >
          <span className="shopCat__spinner" />
          Switching to <strong>{store?.label}</strong>
        </div>
      </div>

      <p className="shopCat__sub">
        Shopping: <strong>{store?.label}</strong> — {store?.address}
      </p>

      {/* REAL GRID */}
      {!isSwitching ? (
        <div className="shopCat__grid">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              className="shopCat__card"
              onClick={() => goToCategory(c.key)}
            >
              <div className="shopCat__imgWrap">
                <img src={c.img} alt={c.label} className="shopCat__img" />
              </div>
              <div className="shopCat__label">{c.label}</div>
            </button>
          ))}
        </div>
      ) : (
        /* SKELETON GRID */
        <div className="shopCat__grid is-skeleton" aria-hidden="true">
          {Array.from({ length: CATEGORIES.length }).map((_, i) => (
            <div className="shopCat__card" key={i}>
              <div className="shopCat__imgWrap">
                <div className="shopCat__skelBox shopCat__shimmer" />
              </div>
              <div className="shopCat__skelText shopCat__shimmer" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}