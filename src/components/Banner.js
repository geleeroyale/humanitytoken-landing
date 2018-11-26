import React from 'react'
import logo from '../assets/images/humanity-token-logo.png'
import styled from 'styled-components'

const Logo = styled.img`
  max-width: 250px;
  @media (max-width: 800px) {
    display: none;
  }
`

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <Logo src={logo} />
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
)

export default Banner
