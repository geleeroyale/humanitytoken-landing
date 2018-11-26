import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Flyer from '../components/Flyer'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Humanity Token</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />
    <Flyer />
    <div id="main">
      <section id="one">
        <div className="inner">
          <p>
            <em>
              “A first step towards creating an incentivized micro-economy,
              distributing the means for people in unfavorable conditions to
              help themselves and build up their lives.”
            </em>
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
                <h3>New Economies</h3>
              </header>
              <p>
                Humanity Token is a technical approach to solving issues of
                distribution of basic social needs for people in need of help.
                The project aims to alleviate trust-issues around social impact
                funds and bridge the gap between the largely non-technicized,
                very poor citizens and the evolution of modern services by
                automatization.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Cause, Effect, Solution
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic04} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Experimentation in Phases</h3>
              </header>
              <p>
                In a best case scenario, the experiment gets larger and the
                reward for participation increases over time in a way that
                allows the participants to climb Maslow’s hierarchy of needs at
                least out of the lowest area and ideally to a point where they
                even can contribute back to the system.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Roadmap
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
                  A hard topic, but when it comes to helping those in need, many
                  people are simply afraid of interaction. What happens if
                  trustless mechanisms establish a secure way to transact?
                </li>
              </ul>
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
)

export default Landing
