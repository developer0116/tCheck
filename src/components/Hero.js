import React from "react"
import { graphql, StaticQuery, navigate, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import { Header4, Lead } from "./Typography"
import Button from "./Button"

import { Flour } from "../lib/colors"
import { sizes } from "../lib/layout"

const HeroContentContainer = styled.div`
  text-align: center;
  max-width: 625px;
  margin: 4.5rem auto 4.5rem;
  color: ${Flour};

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    margin: 3rem auto 4rem;
    max-width: 21rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
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
  margin: 0 auto;
  cursor: pointer;
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
`

const Hero = () => {
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
                From seed to sale, tCheck can tell you the potency{" "}
              </HeroHeader>
              <BR1 />
              <HeroLead color={Flour}>
                Thousands of cannabis professionals are testing their infusions,
                flower, and concentrate with tCheck.
              </HeroLead>
              <BR2 />
              <HeroButtonLink href="/product" target="_blank">
                <HeroButton>Buy Now</HeroButton>
              </HeroButtonLink>

              <BR3 />
              <HeroButton tertiary>Learn More</HeroButton>
            </HeroContentContainer>
          </HeroBackground>
        )
      }}
    />
  )
}

Hero.propTypes = {}

export default Hero
