import React from "react"
import styled from "styled-components"

import { Lead, Header5 } from "./Typography"
import Button from "./Button"

import { Flour, Fade, tGreen, Ink, tBlue } from "../lib/colors"
import { sizes } from "../lib/layout"

import PicPrice from "../images/pic_price.png"

const CTAContainer = styled.section`
  width: 100%;
  height: calc(50vw / 2);
  max-height: 26rem;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    border-radius: 0px;
    margin: 100px 0 0 0;
  }
`

const CTATextSection = styled.div`
  background-color: ${tBlue};
  border-radius: 0 8px 8px 0;
  vertical-align: middle;
  height: 100%;
  text-align: center;
  width: 50%;
  position: relative;
  left: -4px;
  padding: 4.5rem 0;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    padding: 2rem 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    order: 2;
    width: 90%;
    text-align: center;
  }
`

const CTATitle = styled(Header5)`
  margin: 0 auto 2rem;
  width: 90%;
`

const CTALead = styled(Lead)`
  font-size: 1.25rem;
  width: 60%;
  margin: 0 auto 10%;
`

const CTAImage = styled.img`
  width: 55%;

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
