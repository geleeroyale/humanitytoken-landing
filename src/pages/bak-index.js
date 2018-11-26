import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Banner from "../components/Banner";

import pic01 from "../assets/images/pic01.jpg";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic03.jpg";
import pic04 from "../assets/images/pic04.jpg";
import pic05 from "../assets/images/pic05.jpg";
import pic06 from "../assets/images/pic06.jpg";

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Humanity Token"
          meta={[
            {
              name: "description",
              content: "Humanity Token - Blockchain social help token"
            },
            {
              name: "keywords",
              content:
                "humanity, token, blockchain, decent, social, cryptoeconomic"
            }
          ]}
        />

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Short Intro</h3>
                <quote>
                  “A first step towards creating an incentivized micro-economy,
                  distributing the means for people in unfavorable conditions to
                  help themselves and build up their lives.”
                </quote>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Solutions</h3>
                <ul>
                  <li>Charitable donations fully go to intended source</li>
                  <li>
                    Rewarding participation more than one-off actions and
                    campaigns
                  </li>
                  <li>
                    A reputation system increases trust for p2b and p2p
                    relationships
                  </li>
                  <li>
                    Low friction exchange introduced to unbanked (services via
                    vending machine, computer terminal)
                  </li>
                  <li>
                    Valuable data can be gathered from analysing supply, demand,
                    acceptance
                  </li>
                </ul>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Why Blockchain?</h3>
                <ul>
                  <li>
                    Valuable data can be gathered from analysing supply, demand,
                    acceptance
                  </li>
                  <li>Records can be kept transparent</li>
                  <li>Donations can be tracked transparently</li>
                  <li>
                    Creation of virtual ecosystem that can provide means for
                    people in need to reintegrate to society
                  </li>
                  <li>Cooperation with similar minded initiatives</li>
                  <li>
                    A hard topic, but when it comes to helping those in need,
                    many people are simply afraid of interaction. What happens
                    if trustless mechanisms establish a secure way to transact?
                  </li>
                </ul>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Experimentation in Phases</h3>
                <quote>
                  In a best case scenario, the experiment gets larger and the
                  reward for participation increases over time in a way that
                  allows the participants to climb Maslow’s hierarchy of needs
                  at least out of the lowest area and ideally to a point where
                  they even can contribute back to the system.
                </quote>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
