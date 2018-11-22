import React from "react";
import logo from "../assets/images/humanity-token-logo.png";

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <img src={logo} style={{ maxWidth: `250px` }} />
      </header>
      <div className="content">
        <p>Tokenize Social Impact</p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              ⏀
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
