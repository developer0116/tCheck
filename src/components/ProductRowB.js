import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { sizes } from "../lib/layout"

import ExpansionKit from "../images/kit.png"
import GreenHex from "../images/hex_green.svg"

const ProductRowContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
  }
`

const ProductTextSection = styled.div`
  width: 35%;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 45%;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    order: 2;
    width: 90%;
    text-align: center;
  }
`

const ProductTitle = styled(Header5)`
  margin-bottom: 2rem;
  position: relative;

  &:before {
    content: url(${GreenHex});
    position: absolute;
    z-index: -1;
    top: -12px;
    left: -23px;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin-bottom: 2rem;
    &:before {
      content: unset;
    }
  }
`

const ProductBody = styled(Body)``

const ProductImage = styled.img`
  max-width: 50%;
  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin-top: 80px;
    width: 85%;
  }
`

// What do I call this thing?
const ProductRowB = () => {
  return (
    <ProductRowContainer>
      <ProductImage src={ExpansionKit} />

      <ProductTextSection>
        <ProductTitle>
          Expansion kit for flower and concentrate testing
        </ProductTitle>
        <ProductBody secondary>
          Properly test flower and concentrate potency using a tCheck and
          these components. Each item included has been carefully selected to
          ensure the highest level of testing accuracy with tCheck.
        </ProductBody>
      </ProductTextSection>
    </ProductRowContainer>
  )
}

export default ProductRowB
