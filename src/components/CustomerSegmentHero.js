import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { Header4, Lead } from "./Typography"

import { Flour } from "../lib/colors"

const CustomerSegmentHeroBackground = styled(BackgroundImage)`
  height: 30rem;
`

const CustomerSegmentContentContainer = styled.div`
  max-width: 36rem;
  margin: 4.5rem 0 0 6.5rem;
  color: ${Flour};
`

const Header = styled(Header4)`
  margin-bottom: 2rem;
`

const HeroLead = styled(Lead)`
  font-size: 1.25rem;
`

const CustomerSegmentHero = React.memo(({ heroHeader, heroLead }) => {
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
          <CustomerSegmentHeroBackground
            Tag="section"
            fluid={data.hero.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          >
            <CustomerSegmentContentContainer>
              <Header color={Flour}>{heroHeader}</Header>
              <HeroLead color={Flour}>{heroLead}</HeroLead>
            </CustomerSegmentContentContainer>
          </CustomerSegmentHeroBackground>
        )
      }}
    />
  )
})

export default CustomerSegmentHero
