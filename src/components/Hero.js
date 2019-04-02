import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import { Header3, Lead } from "./Typography"
import Button from "./Button"

import { Flour } from "../lib/colors"

const HeroContentContainer = styled.div`
  text-align: center;
  max-width: 625px;
  margin: 250px auto 0;
  color: ${Flour};
`

const HeroBackground = styled(BackgroundImage)`
  height: 700px;
`

const HeroButton = styled(Button)`
  width: 232px;
  margin: 28px auto;
`

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
              <Header3 color={Flour}>
                From seed to sale, tCheck can tell you the potency{" "}
              </Header3>
              <br />
              <Lead color={Flour}>
                Thousands of cannabis professionals are testing their infusions,
                flower, and concentrate with tCheck.
              </Lead>
              <HeroButton>Buy Now</HeroButton>
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
