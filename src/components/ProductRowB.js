import React from "react"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"

import { Flour, Fade, tGreen, Ink } from "../lib/colors"
import { sizes } from "../lib/layout"

import hexagonLarge from "../images/hexagon_large.svg"
import hexagonSmall from "../images/hexagon_small.svg"
import ExpansionKit from "../images/expansionkit.png"

const ProductRowContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
  }
`

const ProductTextSection = styled.div`
  width: 35%;

  @media (max-width: ${sizes.modifiedTablet}) {
    order: 2;
    width: 90%;
    text-align: center;
  }
`

const ProductTitle = styled(Header4)`
  margin-bottom: 48px;
`

const ProductBody = styled(Body)``

const ProductImageContainer = styled.div`
  width: 50%;
  height: 506px;
  background: url(${hexagonLarge}) no-repeat center;

  @media (max-width: ${sizes.modifiedTablet}) {
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

  @media (max-width: ${sizes.modifiedTablet}) {
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
