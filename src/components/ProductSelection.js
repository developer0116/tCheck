import React from "react"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"
import Button from "./Button"

import { tGreen, tBlue, Ink, Fade, Dada, Ghost, Flour } from "../lib/colors"
import { sizes } from "../lib/layout"

import CheckMark from "../images/greenCheckMark.svg"

const ProductSelectionContainer = styled.section`
  display: flex;
  padding: 3.5rem 6.25rem;
  background-color: ${Ghost};

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`

const ProductCarousel = styled.div`
  width: 50%;
  height: 600px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) {
    width: 100%;
  }
`

const ProductSelectionModule = styled.div`
  width: 50%;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: ${Flour};
  padding: 2rem;

  @media (max-width: ${sizes.modifiedTablet}) {
    width: 100%;
  }
`

const ProductSelectionHeader = styled(Header4)``

const ProductSelectionSubHeader = styled(Lead)`
  font-size: 1.25rem;
`

const ProductSelectionToggle = styled.div`
  border: 1px solid ${Dada};
  border-radius: 8px;
  margin: 3rem 0;
`

const ProductColorSelectContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const ProductColorLead = styled(ProductSelectionSubHeader)`
  margin-bottom: 2rem;
`

const ProductColorRow = styled.div`
  display: flex;
  justify-content: center;
  max-width: 18.75rem;
  margin: 0 auto 3rem;
`

const ProductColorCircle = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border-radius: 25px;
  border: solid 2px ${Dada};
  background-color: ${({ color }) => {
    return color
  }};
  cursor: pointer;
`

const ProductAddToCartButton = styled(Button)`
  width: 75%;
  margin: 0 auto;
`

const ProductPoliciesContainer = styled.div`
  max-width: 16rem;
  margin: 0 auto;
`

const ProductPolicyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const ProductPolicyCheckMark = styled.img`
  margin: 0 0.5rem 0 0;
`

const ProductSelection = ({ product, toggleProduct, color, colorSelect }) => {
  const headerText = product === "kit" ? "tCheck 2 & Expansion Kit" : "tCheck 2"
  return (
    <ProductSelectionContainer>
      <ProductCarousel>
        <div>Carousel Here</div>
      </ProductCarousel>
      <ProductSelectionModule>
        <ProductSelectionHeader>{headerText}</ProductSelectionHeader>
        <ProductSelectionSubHeader color={Fade}>
          Cannabis Infusion Tester
        </ProductSelectionSubHeader>
        <ProductSelectionToggle>
          <div>tCheck 2 & Expansion Kit</div>
          <div>tCheck 2</div>
        </ProductSelectionToggle>
        <ProductColorSelectContainer>
          <ProductColorLead color={Fade}>Pick your color</ProductColorLead>
          <ProductColorRow>
            <ProductColorCircle color={Ink} />
            <ProductColorCircle color={tGreen} />
            <ProductColorCircle color={tBlue} />
            <ProductColorCircle color={Flour} />
          </ProductColorRow>
          <ProductAddToCartButton>Add to Cart</ProductAddToCartButton>
        </ProductColorSelectContainer>
        <ProductPoliciesContainer>
          <ProductPolicyContainer>
            <ProductPolicyCheckMark src={CheckMark} />
            <Body>30 day money back guarantee</Body>
          </ProductPolicyContainer>
          <ProductPolicyContainer>
            <ProductPolicyCheckMark src={CheckMark} />
            <Body>6 month warranty</Body>
          </ProductPolicyContainer>
        </ProductPoliciesContainer>
      </ProductSelectionModule>
    </ProductSelectionContainer>
  )
}

export default ProductSelection
