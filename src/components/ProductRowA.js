import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

import hexagonLarge from "../images/hexagon_large.svg"
import CannabisTester from "../images/Cannabistester.png"
import OrangeHex from "../images/hex_orange.svg"

const ProductRowContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 27rem;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
  }
`

const ProductTextSection = styled.div`
  width: 29%;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 40%;
    margin-left: calc(100vw - 93%);
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
    content: url(${OrangeHex});
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
  width: 65%;
  height: 506px;
  background: url(${hexagonLarge}) no-repeat center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 50%;
    background: url(${hexagonLarge}) no-repeat center;
    background-size: contain;
    height: 300px;
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
    margin-top: 80px;
    width: 85%;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
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
