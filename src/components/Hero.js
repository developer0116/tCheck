import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import { Header4, Lead } from "./Typography"
import Button from "./Button"

import { Flour } from "../lib/colors"

import whiteBottom from "../images/Whitebottom.svg"

const HeroContentContainer = styled.div`
  text-align: center;
  max-width: 625px;
  margin: 4.5rem auto 0;
  color: ${Flour};
`

const HeroBackground = styled(BackgroundImage)`
  height: 30rem;
`

const HeroButton = styled(Button)`
  width: 232px;
  margin: 0 auto;
`

const BR = styled.br`
  line-height: 2rem;
`

const WhiteBottom = styled.img``

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          hero: file(relativePath: { eq: "background-baking.jpg" }) {
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
              <Header4 color={Flour}>
                From seed to sale, tCheck can tell you the potency{" "}
              </Header4>
              <BR />
              <Lead color={Flour}>
                Thousands of cannabis professionals are testing their infusions,
                flower, and concentrate with tCheck.
              </Lead>
              <BR />
              <HeroButton>Buy Now</HeroButton>
              <BR />
              <HeroButton tertiary>Learn More</HeroButton>
            </HeroContentContainer>
            {/* <WhiteBottom src={whiteBottom} /> */}
          </HeroBackground>
        )
      }}
    />
  )
}

Hero.propTypes = {}

export default Hero
