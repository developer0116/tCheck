import React from "react"
import CSSTransition from "react-transition-group/CSSTransition"
import styled from "styled-components"

import ProductFAQDropDown from "./ProductFAQDropDown"
import { Body, Header5, Header6 } from "./Typography"

import { Ghost } from "../lib/colors"
import { sizes } from "../lib/layout"

import Arrow from "../images/ic_chevron.svg"

const transitionName = "transition"
const transitionDuration = 500

const FAQContainer = styled.section`
  padding: 3.5rem 6.5rem 6rem;
  background-color: ${Ghost};

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    padding: 3rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    padding: 3rem 1rem;
  }
`

const FAQHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  cursor: pointer;
`

const FAQHeader = styled(Header6)`
  flex-basis: 95%;
`

const ChevronArrowImg = styled.img`
  width: 24px;
  height: 24px;
  transition: transform ${transitionDuration}ms ease;

  ${({ flip }) => {
    return flip ? `transform: rotate(180deg);` : null
  }}

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    display: unset;
  }
`

const FAQAnswer = styled(Body)`
  font-size: 1.25rem;
  margin-top: 1rem;

  overflow: hidden;
  &.${transitionName}-enter {
    max-height: 0rem;
    opacity: 0;
    transition: all ${transitionDuration}ms ease;
  }

  &.${transitionName}-enter-active {
    max-height: 30rem;
    opacity: 1;
    transition: all ${transitionDuration}ms ease;
  }

  &.${transitionName}-exit {
    max-height: 30rem;
    opacity: 1;
    transition: all ${transitionDuration}ms ease;
  }

  &.${transitionName}-exit-active {
    max-height: 0rem;
    opacity: 0;
    transition: all ${transitionDuration}ms ease;
  }
`

const BR = styled.br`
  line-height: 2rem;
`

const ProductFAQ = () => {
  return (
    <FAQContainer>
      <Header5>Frequently Asked Questions</Header5>
      <BR />
      <ProductFAQDropDown>
        {(isOpen, toggleOpen) => {
          return (
            <>
              <FAQHeaderContainer
                onClick={() => {
                  toggleOpen(!isOpen)
                }}
              >
                <FAQHeader>What botanicals does tCheck measure?</FAQHeader>
                <ChevronArrowImg src={Arrow} flip={isOpen} />
              </FAQHeaderContainer>
              <CSSTransition
                in={isOpen}
                timeout={transitionDuration}
                classNames={transitionName}
                unmountOnExit
              >
                <FAQAnswer>
                  <Body secondary>
                    tCheck is currently able to measure the concentration of
                    THx, CBx, or THxa.
                  </Body>
                </FAQAnswer>
              </CSSTransition>
            </>
          )
        }}
      </ProductFAQDropDown>
      <BR />
      <ProductFAQDropDown>
        {(isOpen, toggleOpen) => {
          return (
            <>
              <FAQHeaderContainer
                onClick={() => {
                  toggleOpen(!isOpen)
                }}
              >
                <FAQHeader>Do I need an expansion kit?</FAQHeader>
                <ChevronArrowImg src={Arrow} flip={isOpen} />
              </FAQHeaderContainer>
              <CSSTransition
                in={isOpen}
                timeout={transitionDuration}
                classNames={transitionName}
                unmountOnExit
              >
                <FAQAnswer>
                  <Body secondary>
                    If you are testing flower or concentrates (including full
                    extract oil, wax/crumble, shatter, rosin, etc, you will need 
                    to purchase the expansion kit.
                  </Body>
                </FAQAnswer>
              </CSSTransition>
            </>
          )
        }}
      </ProductFAQDropDown>
      <BR />
      <ProductFAQDropDown>
        {(isOpen, toggleOpen) => {
          return (
            <>
              <FAQHeaderContainer
                onClick={() => {
                  toggleOpen(!isOpen)
                }}
              >
                <FAQHeader>What is the accuracy of tCheck results?</FAQHeader>
                <ChevronArrowImg src={Arrow} flip={isOpen} />
              </FAQHeaderContainer>
              <CSSTransition
                in={isOpen}
                timeout={transitionDuration}
                classNames={transitionName}
                unmountOnExit
              >
                <FAQAnswer>
                  <Body secondary>
                    tCheck result accuracy has a +/- 15% of full scale.
                  </Body>
                </FAQAnswer>
              </CSSTransition>
            </>
          )
        }}
      </ProductFAQDropDown>
      <BR />
      <ProductFAQDropDown>
        {(isOpen, toggleOpen) => {
          return (
            <>
              <FAQHeaderContainer
                onClick={() => {
                  toggleOpen(!isOpen)
                }}
              >
                <FAQHeader>
                  Can I test infusions outside the tCheck’s measurement range?
                </FAQHeader>
                <ChevronArrowImg src={Arrow} flip={isOpen} />
              </FAQHeaderContainer>
              <CSSTransition
                in={isOpen}
                timeout={transitionDuration}
                classNames={transitionName}
                unmountOnExit
              >
                <FAQAnswer>
                  <Body secondary>
                    Yes, you can. You need to dilute your infusion to a point
                    where the tCheck can measure it. See our guide.
                  </Body>
                </FAQAnswer>
              </CSSTransition>
            </>
          )
        }}
      </ProductFAQDropDown>
    </FAQContainer>
  )
}

export default ProductFAQ
