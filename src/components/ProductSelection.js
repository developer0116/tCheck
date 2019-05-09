import React from "react"
import styled from "styled-components"
import { animateScroll as scroll } from "react-scroll"

import { Body, Lead, Header4 } from "./Typography"
import Button from "./Button"
import ProductCarousel from "./ProductCarousel"

import { tGreen, tBlue, Ink, Fade, Dada, Ghost, Flour } from "../lib/colors"
import { sizes } from "../lib/layout"
import productCarouselImages from "../lib/productCarouselImages"
import productSelectionContent from "../lib/productSelectionContent"

import CheckMark from "../images/greenCheckMark.svg"
import BlackCheckMark from "../images/ic_checkmark_b.svg"
import WhiteCheckMark from "../images/ic_checkmark_w.svg"

const ProductSelectionContainer = styled.section`
  display: flex;
  padding: 3.5rem 6.25rem;
  background-color: ${Ghost};

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    padding: 1.5rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`

const ProductCarouselContainer = styled.div`
  width: 50%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

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
  position: relative;
  z-index: 2;

  @media (max-width: ${sizes.modifiedTablet}) {
    width: 100%;
  }
`

const ProductSelectionTitle = styled(Header4)``

const ProductSelectionHeader = styled(Lead)`
  font-size: 1.25rem;
`

const ProductSelectionBody = styled(Body)`
  min-height: 3rem;
`

const ProductSelectionButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border-radius: 8px;
  padding: 0.75rem 1.875rem;
  cursor: pointer;
  ${({ selected }) => {
    return selected
      ? `border: solid 2px ${tBlue}; box-shadow: 0 4px 10px 0 rgba(16, 156, 179, 0.2);`
      : `box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);`
  }}
`

const ProductSelectionName = styled(Lead)`
  font-size: 1.25rem;
`

const ProductSelectionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem auto;
  max-width: 25rem;
`

const ProductSelectionPrice = styled(Body)`
  font-size: 0.875rem;
  color: inherit;
`

const ProductColorSelectContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`

const ProductColorLead = styled(ProductSelectionHeader)`
  margin-bottom: 2rem;
`

const Misc = styled(Body)`
  text-align: center;
  margin: 2rem 0 0 0;
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
  background-image: url(${({ productColor, isSelected }) => {
    if (productColor === "black" && isSelected) {
      return WhiteCheckMark
    } else if (isSelected) {
      return BlackCheckMark
    } else {
      return null
    }
  }});
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

const ProductCarouselImgContainer = styled.div`
  background-color: ${Ghost};
`

const InlineLink = styled.a`
  text-decoration: none;
  color: ${tBlue};
`

const ProductSelection = ({
  productNum,
  setProductNum,
  productColor,
  changeColor,
  setDetail,
}) => {
  return (
    <ProductSelectionContainer>
      <ProductCarouselContainer>
        <ProductCarousel>
          {productCarouselImages[productColor].map(img => {
            return (
              <ProductCarouselImgContainer>
                <img src={img} />
              </ProductCarouselImgContainer>
            )
          })}
        </ProductCarousel>
      </ProductCarouselContainer>
      <ProductSelectionModule>
        <ProductSelectionTitle>
          {productSelectionContent[productNum].title}
        </ProductSelectionTitle>
        <ProductSelectionHeader>
          {productSelectionContent[productNum].header}
        </ProductSelectionHeader>
        <ProductSelectionBody secondary>
          {productSelectionContent[productNum].subHeader}{" "}
          <InlineLink
            href="#"
            onClick={() => {
              setDetail("features")
              scroll.scrollTo(
                document.getElementById("details").offsetTop - 100
              )
            }}
          >
            Learn more
          </InlineLink>
        </ProductSelectionBody>
        <Misc secondary>Select your purchase</Misc>
        <ProductSelectionButtonsContainer>
          <ProductSelectionButton
            selected={productNum == 1}
            onClick={() => setProductNum(1)}
          >
            <ProductSelectionName>
              tCheck 2 & Expansion Kit
            </ProductSelectionName>
            <ProductSelectionPrice fontWeight={900}>
              $479.98
            </ProductSelectionPrice>
          </ProductSelectionButton>
          <br />
          <ProductSelectionButton
            selected={productNum == 2}
            onClick={() => setProductNum(2)}
          >
            <ProductSelectionName>tCheck 2 device only</ProductSelectionName>
            <ProductSelectionPrice fontWeight={900}>
              $279.99
            </ProductSelectionPrice>
          </ProductSelectionButton>
          <br />
          <ProductSelectionButton
            selected={productNum == 3}
            onClick={() => setProductNum(3)}
          >
            <ProductSelectionName>Expansion kit only</ProductSelectionName>
            <ProductSelectionPrice fontWeight={900}>
              $199.99
            </ProductSelectionPrice>
          </ProductSelectionButton>
        </ProductSelectionButtonsContainer>
        <Misc secondary>
          Ships in 2-3 weeks. See{" "}
          <InlineLink
            href="#"
            onClick={() => {
              setDetail("shipping")
              scroll.scrollTo(
                document.getElementById("details").offsetTop - 100
              )
            }}
          >
            shipping details
          </InlineLink>
        </Misc>
        <ProductColorSelectContainer>
          <ProductColorLead color={Fade}>Pick your color</ProductColorLead>
          <ProductColorRow>
            <ProductColorCircle
              color={Ink}
              onClick={e => {
                changeColor("black")
              }}
              isSelected={productColor === "black"}
              productColor={productColor}
            />
            <ProductColorCircle
              color={tGreen}
              onClick={e => {
                changeColor("green")
              }}
              isSelected={productColor === "green"}
              productColor={productColor}
            />
            <ProductColorCircle
              color={tBlue}
              onClick={e => {
                changeColor("blue")
              }}
              isSelected={productColor === "blue"}
              productColor={productColor}
            />
            <ProductColorCircle
              color={Flour}
              onClick={e => {
                changeColor("white")
              }}
              isSelected={productColor === "white"}
              productColor={productColor}
            />
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
