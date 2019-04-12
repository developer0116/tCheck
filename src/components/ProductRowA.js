import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

import hexagonLarge from "../images/hexagon_large.svg"
import hexagonSmall from "../images/hexagon_small.svg"
import CannabisTester from "../images/Cannabistester.png"

const ProductRowContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 27rem;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
  }
`

const ProductTextSection = styled.div`
  width: 29%;

  @media (max-width: ${sizes.modifiedTablet}) {
    order: 2;
    width: 90%;
    text-align: center;
  }
`

const ProductTitle = styled(Header5)`
  margin-bottom: 48px;
`

const ProductBody = styled(Body)``

const ProductImageContainer = styled.div`
  width: 65%;
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
const ProductRowA = () => {
  return (
    <ProductRowContainer>
      <ProductTextSection>
        <ProductTitle>Cannabis tester for infusions</ProductTitle>
        <ProductBody color={Fade}>
          Collect live readings of your sample in minutes using the tCheck 2 and
          your phone. Test infused olive oil, coconut oil, alcohol, or butter.
        </ProductBody>
      </ProductTextSection>
      <ProductImageContainer>
        <ProductImage src={CannabisTester} />
      </ProductImageContainer>
    </ProductRowContainer>
  )
}

export default ProductRowA
