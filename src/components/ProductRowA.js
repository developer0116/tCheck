import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { sizes } from "../lib/layout"

import CannabisTester from "../images/Cannabistester.png"
import OrangeHex from "../images/hex_orange.svg"

const ProductRowContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
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
    content: url(${OrangeHex});
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
  }
`

// What do I call this thing?
const ProductRowA = () => {
  return (
    <ProductRowContainer>
      <ProductTextSection>
        <ProductTitle>Cannabis tester for infusions</ProductTitle>
        <ProductBody secondary>
          Collect live readings of your sample in minutes using the tCheck and
          your phone. Test infused olive oil, coconut oil, alcohol, or butter for THC, THCa, or CBD.
        </ProductBody>
      </ProductTextSection>

      <ProductImage src={CannabisTester} />
    </ProductRowContainer>
  )
}

export default ProductRowA
