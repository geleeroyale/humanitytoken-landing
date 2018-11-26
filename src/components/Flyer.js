import React from 'react'
import logo1 from '../assets/images/decent.png'
import logo2 from '../assets/images/humanventure.png'
import logo3 from '../assets/images/collectiveenergy.png'
import styled from 'styled-components'

const Section = styled.div`
  background: linear-gradient(180deg, #fffa8c 0%, #96cdff 100%);
  max-width: 100%;
`

const Description = styled.p`
  text-align: center;
  padding-top: 1rem;
  margin: 0 auto;
  align-self: end;
`

const JointVenture = styled.div`
  display: grid;
  padding: 1rem;
  max-width: 800px;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  align-items: center;
  margin: auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Link = styled.a`
  text-decoration: none;
`

const Logo = styled.img`
  padding: 1rem;
  max-width: 200px;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Content = styled.div`
  max-width: 720px;
  padding: 1rem;
  justify-self: center;
`

const Equation = styled.h2`
  padding-top: 10vh;
  color: black;
  text-align: center;
  justify-self: center;
  font-size: 2.8rem;
`

const Flyer = props => (
  <Section style={{ minHeight: `100vh` }}>
    <Description>A collaboration between</Description>
    <JointVenture>
      <Link href="https://decent.ch">
        <Logo src={logo1} />
      </Link>
      <Link href="https://humanventure.world">
        <Logo src={logo2} />
      </Link>
      <Link href="https://collective-energy.at">
        <Logo src={logo3} />
      </Link>
    </JointVenture>
    <Equation>
      SOCIAL MARKETS
      <br />
      <strong>+</strong>
      <br />
      DONATIONS
      <br />
      <strong>+</strong>
      <br />
      BLOCKCHAIN
      <br />
      <strong>=</strong>
      <br />
      TRANSPARENT,
      <br /> MEASUREABLE,
      <br /> IMPACT!
    </Equation>
    <Container className="inner">
      <h1>Tokenize social impact</h1>
      <Content className="content">
        <p>
          Humanity Token is a technical approach to solving issues of
          distribution of basic social needs for people in need of help. The
          project aims to alleviate trust-issues around social impact funds and
          bridge the gap between the largely non-technicized, very poor citizens
          and the evolution of modern services by automatization.
        </p>
      </Content>
    </Container>
  </Section>
)

export default Flyer
