import React, { useState } from "react"
import { graphql, StaticQuery, navigate, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Modal from "react-bootstrap/Modal"

import { Header4, Lead } from "./Typography"
import Button from "./Button"

import { Flour } from "../lib/colors"
import { sizes } from "../lib/layout"

const HeroContentContainer = styled.div`
  max-width: 625px;
  margin: 4.5rem 0 4.5rem 4.5rem;
  color: ${Flour};

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    text-align: center;
    margin: 3rem auto 4rem;
    max-width: 21rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    text-align: center;
    margin: 3rem auto 4rem;
    max-width: 21rem;
  }
`

const HeroBackground = styled(BackgroundImage)`
  &::before {
    background-position: bottom !important;
    background-color: ${Flour} !important;
  }
`

const HeroHeader = styled(Header4)`
  @media (max-width: ${sizes.modifiedTablet}) {
    font-size: 1.5rem;
  }
`

const HeroLead = styled(Lead)`
  font-size: 1.25rem;
  @media (max-width: ${sizes.modifiedTablet}) {
    font-size: 1rem;
  }
`

const HeroButton = styled(Button)`
  width: 232px;
  cursor: pointer;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileS}) {
    margin: 0 auto;
  }
`

const BR1 = styled.br`
  line-height: 2rem;
  @media (max-width: ${sizes.modifiedTablet}) {
    line-height: 1rem;
  }
`

const BR2 = styled.br`
  line-height: 2rem;
  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    line-height: 3rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    line-height: 4rem;
  }
`

const BR3 = styled.br`
  line-height: 1.5rem;
`

const HeroButtonLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`

const ModalHeaderExtended = styled(Modal.Header)`
  border: none !important;
`

const IframeContainer = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

const Hero = () => {
  const [show, toggleModalShow] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query {
          hero: file(relativePath: { eq: "hero_homepage.png" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1440) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <HeroBackground
            Tag="section"
            fluid={data.hero.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          >
            <HeroContentContainer>
              <HeroHeader color={Flour}>
                From seed to sale, tCheck will tell you the potency{" "}
              </HeroHeader>
              <BR1 />
              <HeroLead color={Flour}>
                Thousands of cannabis professionals are testing their infusions,
                flower, and concentrate with tCheck.
              </HeroLead>
              <BR2 />
              <HeroButtonLink href="https://tcheckshop.com" target="_blank">
                <HeroButton>Buy Now</HeroButton>
              </HeroButtonLink>

              <BR3 />
              <HeroButtonLink>
                <HeroButton tertiary onClick={() => toggleModalShow(true)}>
                  Learn More
                </HeroButton>
              </HeroButtonLink>
              <Modal
                centered
                size="lg"
                show={show}
                onHide={() => toggleModalShow(false)}
              >
                <ModalHeaderExtended closeButton />
                <Modal.Body>
                  <IframeContainer>
                    <iframe
                      width="420"
                      height="315"
                      src="https://www.youtube.com/embed/1-GbI-y1BWk"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </IframeContainer>
                </Modal.Body>
              </Modal>
            </HeroContentContainer>
          </HeroBackground>
        )
      }}
    />
  )
}

Hero.propTypes = {}

export default Hero
