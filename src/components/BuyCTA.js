import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Lead, Header5 } from "./Typography"
import Button from "./Button"

import { Flour, tBlue } from "../lib/colors"
import { sizes } from "../lib/layout"

import PicPrice from "../images/pic_price.png"

const CTAContainer = styled.section`
  width: 100%;
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
    height: auto;
  }
`

const CTATextSection = styled.div`
  text-align: center;
  padding: 4.5rem 3rem;
  border-radius: 8px;
  background-color: ${tBlue};
  flex-basis: content;

  @media (max-width: ${sizes.laptopL}) and (min-width: ${sizes.laptop}) {
    padding: 2.5rem 0;
  }

  @media (max-width: ${sizes.laptop}) and (min-width: ${sizes.modifiedTablet}) {
    padding: 2rem;
  }

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    padding: 2rem 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    order: 2;
    height: auto;
    text-align: center;
    padding: 2rem;
    border-radius: 0;
  }
`

const CTATitle = styled(Header5)`
  width: 77%;
  margin: 0 auto 2rem;

  @media (max-width: ${sizes.laptop}) and (min-width: ${sizes.modifiedTablet}) {
  }

  @media (max-width: ${sizes.laptop}) and (min-width: ${sizes.mobileS}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
`

const CTALead = styled(Lead)`
  font-size: 1.25rem;
  width: 60%;
  margin: 0 auto 4.5rem;

  @media (max-width: ${sizes.laptop}) and (min-width: ${sizes.mobileS}) {
    font-size: 1rem;
    margin: 0 auto 2.5rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1rem;
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
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
  cursor: pointer;
`

const CTAButtonLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`

// What do I call this thing?
const BuyCTA = () => {
  return (
    <CTAContainer>
      <CTAImage src={PicPrice} />

      <CTATextSection>
        <CTATitle color={Flour}>
          Everything you need to test infusions with tCheck for $229.99
        </CTATitle>
        <CTALead color={Flour}>
          Want to also test flower and concentrate? Get the tCheck and Expansion
          kit for $359.99.
        </CTALead>
        <CTAButtonLink href="https://tcheckshop.com" target="_blank">
          <CTAButton secondary tertiary>
            Buy Now
          </CTAButton>
        </CTAButtonLink>
      </CTATextSection>
    </CTAContainer>
  )
}

export default BuyCTA
