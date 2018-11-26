import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Content = styled.div`
  max-width: 720px;
  padding: 3rem;
  justify-self: center;
  align-self: center;
`

const Email = styled.a`
  margin: 0 auto;
  font-weight: 600;
  color: #fffa8c;
`
const Lastline = styled.hr`
  grid-column: span 2;
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`

const Copyright = styled.p`
  margin: auto;
  padding: 3rem;
  color: #fffa8c;
  grid-column: span 2;

  @media (max-width: 800px) {
    grid-column: span 1;
  }
`

const Footer = props => (
  <footer id="footer">
    <Container>
      <Content>
        <Email href="mailto:contact@humanitytoken.net">
          contact@humanitytoken.net
        </Email>
      </Content>

      <Content>
        <ul className="icons">
          <li>
            <a href="#" className="icon alt fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon alt fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon alt fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon alt fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon alt fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </Content>
      <Lastline />
      <Copyright>&copy; 2018 Humanity Token</Copyright>
    </Container>
  </footer>
)

export default Footer
