// Footer.jsx
import React from "react";
import "../css/Footer.css";

export default function Footer({
  brandLine1 = "Logo",
  brandLine2 = "Ounces & Eighths",
  disclaimer = `Disclaimer: Cannabis can impair concentration, coordination, and judgment. Do not operate a vehicle or machinery under the influence of this drug. This product has intoxicating effects and may be habit forming. There may be health risks associated with consumption of this product. For use only by adults twenty-one and older. Keep out of the reach of children.`,
  copyright = " All Rights Ounces & Eighths",
}) {
  //Updated year
  let date = new Date().getFullYear();

  return (


    <footer className="siteFooter" aria-label="Footer">
      <div className="siteFooter__overlay" />

      <div className="siteFooter__inner">
        <div className="siteFooter__grid">
          {/* Column 1 */}
          <div className="siteFooter__col">
            <div style={{width: '28%'}}>
            <h3 className="siteFooter__title">SHOP</h3>

            </div>
            <ul className="siteFooter__list">
              <li><a className="siteFooter__link" href="/shop/flower">FLOWER</a></li>
              <li><a className="siteFooter__link" href="/shop/edibles">EDIBLES</a></li>
              <li><a className="siteFooter__link" href="/shop/pre-roll">PRE - ROLL</a></li>
              <li><a className="siteFooter__link" href="/shop/concentrates">CONCENTRATES</a></li>
              <li><a className="siteFooter__link" href="/shop/topicals">TOPICALS</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="siteFooter__col">
            <h3 className="siteFooter__title">ABOUT US</h3>
            <ul className="siteFooter__list">
              <li><a className="siteFooter__link" href="/">HOME</a></li>
              <li><a className="siteFooter__link" href="/orderOnline">ORDER ONLINE</a></li>
            </ul>
          </div>

          {/* Column 3 */}
        

<div className="test">

          <div className="siteFooter__col">
            <h3 className="siteFooter__title">CONTACT</h3>
            <ul className="siteFooter__list siteFooter__list--muted">
              <li className="siteFooter__text">7531 196th St SW

                Lynwood WA 98036</li>
              <li className="siteFooter__text"><a style={{ textDecoration: 'none', color: "#ffffff" }} href="tel:+1234567890" className="phone-link">
                Contact us: 4251234567
              </a></li>
              <li className="siteFooter__text">Monday - Friday 8am - 10pm</li>
            </ul>

            <div className="siteFooter__brand">
              <div className="siteFooter__logoBox" aria-hidden="true">
                {brandLine1}
              </div>
              <div className="siteFooter__brandName">{brandLine2}</div>
            </div>
          </div>
        </div>
         
</div>

        <div className="siteFooter__bottom">
          <div className="siteFooter__copyright">© {date} {copyright}</div>
          <p className="siteFooter__disclaimer">{disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}