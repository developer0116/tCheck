import React from "react"
import styled from "styled-components"

import { Body, Lead, Header5 } from "./Typography"
import Button from "./Button"

import { Flour, Fade, tGreen, Ink, tBlue } from "../lib/colors"
import { sizes } from "../lib/layout"

import hexagonLarge from "../images/hexagon_large.svg"
import hexagonSmall from "../images/hexagon_small.svg"
import PicPrice from "../images/pic_price.png"

const CTAContainer = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${tBlue};
  border-radius: 8px;
  margin: 140px 0;
  width: 100%;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    border-radius: 0px;
    margin: 100px 0 0 0;
  }
`

const CTATextSection = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 4.5rem 0;
  text-align: center;
  border: 1px solid black;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    order: 2;
    width: 90%;
    text-align: center;
  }
`

const CTATitle = styled(Header5)`
  margin-bottom: 2rem;
`

const CTALead = styled(Lead)`
  font-size: 1.25rem;
  padding: 0 9%;
  margin-bottom: 4.5rem;
`

const CTAImage = styled.img`
  width: 60%;
  max-height: 29.5rem;
  margin: -30px;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    display: none;
  }
`

const CTAButton = styled(Button)`
  width: 13.5rem;
  margin: 0 auto;
`

// What do I call this thing?
const BuyCTA = () => {
  return (
    <CTAContainer>
      <CTAImage src={PicPrice} />
      <CTATextSection>
        <CTATitle color={Flour}>
          Start testing infusions with tCheck for $279.99
        </CTATitle>
        <CTALead color={Flour}>
          Test infusions, flower, and concentrates for $478.99.
        </CTALead>
        <CTAButton secondary tertiary>
          Buy Now
        </CTAButton>
      </CTATextSection>
    </CTAContainer>
  )
}

export default BuyCTA
