import React from "react"
import styled from "styled-components"
import { animateScroll as scroll } from "react-scroll"

import { Body, Lead, Header5 } from "./Typography"
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
  padding: 3.5rem 3.25rem;
  background-color: ${Ghost};
  justify-content: space-between;

  @media (max-width: ${sizes.laptop}) and (min-width: ${sizes.modifiedTablet}) {
    padding: 3.5rem 1rem;
  }

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    padding: 0;
    flex-direction: column;
    align-items: center;
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

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileS}) {
    height: auto;
    flex-direction: column;
  }
`

const ProductSelectionModule = styled.div`
  width: 40%;
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

const ProductSelectionTitle = styled(Header5)`
  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin: 3rem 0 0 0;
    text-align: center;
  }
`

const ProductSelectionHeader = styled(Lead)`
  font-size: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    text-align: center;
  }
`

const ProductSelectionBody = styled(Body)`
  min-height: 3rem;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin: 0 0 2rem 0;
    text-align: center;
  }
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
  margin-bottom: 1rem;
`

const ProductSelectionName = styled(Lead)`
  font-size: 1.125rem;
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

const ProductSelectionQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  width: 171px;
  height: 56px;
  margin: 1.5rem auto;
  border-radius: 12px;
  border: solid 3px ${Dada};
  background-color: ${Flour};
`

const ProductSelectionQuantity = styled(Lead)`
  text-align: center;
  width: 32%;
  font-size: 1.25rem;
`

const ProductSelectionQuantityModifiers = styled(Lead)`
  width: 32%;
  text-align: center;
  cursor: pointer;
  fonst-size: 1.5rem;
`

const ProductSelectionQuantityLine = styled.span`
  border: 1px solid ${Dada};
  height: 85%;
`

const ProductColorSelectContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`

const ProductColorLead = styled(ProductSelectionHeader)`
  margin-bottom: 2rem;
  font-size: 0.875rem;
`

const Misc = styled(Body)`
  text-align: center;
  margin: 2rem 0 0 0;
  font-size: 0.875rem;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin: 0;
  }
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
    if (
      (productColor === "black" ||
        productColor === "blue" ||
        productColor === "green") &&
      isSelected
    ) {
      return WhiteCheckMark
    } else if (isSelected) {
      return BlackCheckMark
    } else {
      return null
    }
  }});
`

const ProductAddToCartButton = styled(Button)`
  height: 3.5rem;
  width: 75%;
  margin: 0 auto;
`

const ProductPoliciesContainer = styled.div`
  max-width: 18rem;
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
  product,
  setProductName,
  productColor,
  changeColor,
  setDetail,
  quantity,
  setQuantity,
  isMobile,
  createCheckout,
}) => {
  const incrementQuantity = () => {
    const newQuantity = quantity === 99 ? 99 : quantity + 1
    setQuantity(newQuantity)
  }

  const decrementQuantity = () => {
    const newQuantity = quantity === 1 ? 1 : quantity - 1
    setQuantity(newQuantity)
  }

  return (
    <ProductSelectionContainer>
      <ProductCarouselContainer>
        {isMobile ? (
          <>
            <ProductSelectionTitle>
              {productSelectionContent[product].title}
            </ProductSelectionTitle>
            <ProductSelectionHeader>
              {productSelectionContent[product].header}
            </ProductSelectionHeader>
            <ProductSelectionBody secondary>
              {productSelectionContent[product].subHeader}{" "}
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
          </>
        ) : null}
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
        {isMobile ? null : (
          <>
            <ProductSelectionTitle>
              {productSelectionContent[product].title}
            </ProductSelectionTitle>
            <ProductSelectionHeader>
              {productSelectionContent[product].header}
            </ProductSelectionHeader>
            <ProductSelectionBody secondary>
              {productSelectionContent[product].subHeader}{" "}
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
          </>
        )}
        <Misc secondary>Select your purchase</Misc>
        <ProductSelectionButtonsContainer>
          <ProductSelectionButton
            selected={product === "tCheckAndKit"}
            onClick={() => setProductName("tCheckAndKit")}
          >
            <ProductSelectionName>
              tCheck 2 & Expansion Kit
            </ProductSelectionName>
            <ProductSelectionPrice fontWeight={900}>
              $479.98
            </ProductSelectionPrice>
          </ProductSelectionButton>

          <ProductSelectionButton
            selected={product === "tCheck"}
            onClick={() => setProductName("tCheck")}
          >
            <ProductSelectionName>tCheck 2 device only</ProductSelectionName>
            <ProductSelectionPrice fontWeight={900}>
              $279.99
            </ProductSelectionPrice>
          </ProductSelectionButton>

          <ProductSelectionButton
            selected={product === "kit"}
            onClick={() => setProductName("kit")}
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
        <ProductSelectionQuantityContainer>
          <ProductSelectionQuantityModifiers onClick={decrementQuantity}>
            -
          </ProductSelectionQuantityModifiers>
          <ProductSelectionQuantityLine />
          <ProductSelectionQuantity>{quantity}</ProductSelectionQuantity>
          <ProductSelectionQuantityLine />
          <ProductSelectionQuantityModifiers onClick={incrementQuantity}>
            +
          </ProductSelectionQuantityModifiers>
        </ProductSelectionQuantityContainer>
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
          <ProductAddToCartButton
            onClick={() => {
              createCheckout()
            }}
          >
            Add to Cart
          </ProductAddToCartButton>
        </ProductColorSelectContainer>
        <ProductPoliciesContainer>
          <ProductPolicyContainer>
            <ProductPolicyCheckMark src={CheckMark} />
            <Body>30 day money back guarantee</Body>
          </ProductPolicyContainer>
          <ProductPolicyContainer>
            <ProductPolicyCheckMark src={CheckMark} />
            <Body>6 month warranty on tCheck device</Body>
          </ProductPolicyContainer>
        </ProductPoliciesContainer>
      </ProductSelectionModule>
    </ProductSelectionContainer>
  )
}

export default ProductSelection
