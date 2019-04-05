import React from "react"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"
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

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
  }
`

const CTATextSection = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 60px 0;
  text-align: center;

  @media (max-width: ${sizes.modifiedTablet}) {
    order: 2;
    width: 90%;
    text-align: center;
  }
`

const CTATitle = styled(Header4)`
  margin-bottom: 24px;
`

const CTALead = styled(Lead)`
  padding: 0 9%;
`

const CTAImage = styled.img`
  width: 60%;
  max-height: 500px;
  margin: -30px;

  @media (max-width: ${sizes.modifiedTablet}) {
    display: none;
  }
`

const CTAButton = styled(Button)`
  width: 232px;
  margin: 45px auto;
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
        <CTAButton secondary>Buy Now</CTAButton>
      </CTATextSection>
    </CTAContainer>
  )
}

export default BuyCTA
