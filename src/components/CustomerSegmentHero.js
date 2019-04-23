import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { Header4, Lead } from "./Typography"

import { Flour } from "../lib/colors"

// const CustomerSegmentHeroBackground = styled(BackgroundImage)`
//   height: 30rem;
// `

const CustomerSegmentHeroBackground = styled.div`
  background: url(${({ heroImgURL }) => {
    return heroImgURL
  }});
  height: 30rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom !important;
  background-color: ${Flour} !important;
  padding-top: 4.5rem;
`

const CustomerSegmentContentContainer = styled.div`
  margin: 0 0 0 6.5rem;
  color: ${Flour};
`

const Header = styled(Header4)`
  margin: 0 0 2rem 0;
`

const HeroLead = styled(Lead)`
  font-size: 1.25rem;
  max-width: 35rem;
`

const CustomerSegmentHero = React.memo(
  ({ heroImgURL, heroHeader, heroLead }) => {
    // return (
    // <StaticQuery
    //   query={graphql`
    //   query {
    //     hero: file(relativePath: { eq: ${heroImgURL} }) {
    //       childImageSharp {
    //         fluid(quality: 100, maxWidth: 1440) {
    //           ...GatsbyImageSharpFluid_withWebp
    //         }
    //       }
    //     }
    //   }
    // `}
    //   render={data => {
    return (
      // <CustomerSegmentHeroBackground
      //   Tag="section"
      //   fluid={data.hero.childImageSharp.fluid}
      //   backgroundColor={`#040e18`}
      // >
      <CustomerSegmentHeroBackground heroImgURL={heroImgURL}>
        <CustomerSegmentContentContainer>
          <Header color={Flour}>{heroHeader}</Header>
          <HeroLead color={Flour}>{heroLead}</HeroLead>
        </CustomerSegmentContentContainer>
      </CustomerSegmentHeroBackground>
      // </CustomerSegmentHeroBackground>
    )
    //   }}
    // />
    // )
  }
)

export default CustomerSegmentHero
