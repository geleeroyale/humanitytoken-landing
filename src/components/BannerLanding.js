import React from "react";
import logo from "../assets/images/humanity-token-logo.png";

const BannerLanding = props => (
  <section id="banner" className="style1" style={{ minHeight: `100vh` }}>
    <div className="inner">
      <header className="major">
        <img src={logo} style={{ maxWidth: `250px` }} />
      </header>
      <h2>Tokenize social impact</h2>
      <div className="content" />
    </div>
  </section>
);

export default BannerLanding;
