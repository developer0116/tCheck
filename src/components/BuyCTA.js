import React from "react"
import styled from "styled-components"

import { Lead, Header5 } from "./Typography"
import Button from "./Button"

import { Flour, tBlue } from "../lib/colors"
import { sizes } from "../lib/layout"

import PicPrice from "../images/pic_price.png"

const CTAContainer = styled.section`
  width: 100%;
  border-radius: 8px;
  background-color: ${tBlue};
  margin: 6rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    border-radius: 0px;
    margin: 100px 0 0 0;
    align-items: unset;
  }
`

const CTATextSection = styled.div`
  text-align: center;
  padding: 0 45px;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    padding: 2rem 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    order: 2;

    text-align: center;
    padding: 2rem;
  }
`

const CTATitle = styled(Header5)`
  margin: 0 auto 2rem;
  width: 90%;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1.5rem;
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
`

const CTALead = styled(Lead)`
  font-size: 1.25rem;
  width: 60%;
  margin: 0 auto 10%;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1rem;
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
`

const CTAImage = styled.img`
  width: 50%;

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
