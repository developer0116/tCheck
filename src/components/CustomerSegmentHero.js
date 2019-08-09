import React from "react"
import styled from "styled-components"

import { Header4, Lead } from "./Typography"

import { Flour } from "../lib/colors"
import { sizes } from "../lib/layout"

const CustomerSegmentHeroBackground = styled.div`
  background: url(${({ heroImgURL }) => heroImgURL});
  height: 28rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom !important;
  background-color: ${Flour} !important;
  padding-top: 4.5rem;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    height: 24rem;
  }
`

const CustomerSegmentContentContainer = styled.div`
  margin: 0 0 0 6.5rem;
  color: ${Flour};

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    margin: 0 0 0 2rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    text-align: center;
    margin: 0 auto;
  }
`

const Header = styled(Header4)`
  margin: 0 0 2rem 0;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1.5rem;
    text-align: center;
    margin: 0 auto 1rem;
    width: 80%;
  }
`

const HeroLead = styled(Lead)`
  font-size: 1.25rem;
  max-width: 35rem;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
    width: 85%;
  }
`

const CustomerSegmentHero = React.memo(
  ({ heroImgURL, heroHeader, heroLead }) => {
    return (
      <CustomerSegmentHeroBackground heroImgURL={heroImgURL}>
        <CustomerSegmentContentContainer>
          <Header color={Flour}>{heroHeader}</Header>
          <HeroLead color={Flour}>{heroLead}</HeroLead>
        </CustomerSegmentContentContainer>
      </CustomerSegmentHeroBackground>
    )
  }
)

export default CustomerSegmentHero
