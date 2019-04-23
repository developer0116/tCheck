import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

import hexagonLarge from "../images/hexagon_large.svg"
import ExpansionKit from "../images/expansionkit.png"
import GreenHex from "../images/hex_green.svg"

const ProductRowContainer = styled.section`
  display: flex;
  justify-content: space-between;
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
    margin-right: calc(100vw - 93%);
    width: 45%;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    order: 2;
    width: 90%;
    text-align: center;
  }
`

const ProductTitle = styled(Header5)`
  margin-bottom: 48px;
  position: relative;

  &:before {
    content: url(${GreenHex});
    position: absolute;
    z-index: -1;
    top: -12px;
    left: -23px;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    &:before {
      content: unset;
    }
  }
`

const ProductBody = styled(Body)``

const ProductImageContainer = styled.div`
  width: 50%;
  height: 506px;
  background: url(${hexagonLarge}) no-repeat center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 40%;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: 90%;
    background: url(${hexagonLarge}) no-repeat center;
    background-size: contain;
    height: 300px;
  }
`

const ProductImage = styled.img`
  width: 85%;
  margin-top: 130px;
  margin-bottom: 60px;

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
      <ProductImageContainer>
        <ProductImage src={ExpansionKit} />
      </ProductImageContainer>
      <ProductTextSection>
        <ProductTitle>
          Expansion kit for flower and concentrate testing
        </ProductTitle>
        <ProductBody color={Fade}>
          Properly test flower and concentrate potency using a tCheck 2 and
          these compoents. Each item included has been carefully selected to
          ensure the highest level of testing accuracy with tCheck 2.
        </ProductBody>
      </ProductTextSection>
    </ProductRowContainer>
  )
}

export default ProductRowB
