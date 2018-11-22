import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Banner from "../components/Banner";

import pic01 from "../assets/images/pic01.jpg";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic03.jpg";

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Humanity Token - Info</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <Banner />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>New Economies</h2>
          </header>
          <p>
            <em>
              “A first step towards creating an incentivized micro-economy,
              distributing the means for people in unfavorable conditions to
              help themselves and build up their lives.”
            </em>
          </p>
          <p>
            Human Token is a technical approach to solving issues of
            distribution of basic social needs for people in need of help. The
            project aims to alleviate trust-issues around social impact funds
            and bridge the gap between the largely non-technicized, very poor
            citizens and the evolution of modern services by automatization.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic01} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Orci maecenas</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic02} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Rhoncus magna</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic03} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

export default Landing;
