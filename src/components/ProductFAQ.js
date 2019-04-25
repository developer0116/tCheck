import React from "react"
import CSSTransition from "react-transition-group/CSSTransition"
import styled from "styled-components"

import ProductFAQDropDown from "./ProductFAQDropDown"
import { Body, Header5, Header6 } from "./Typography"

import { tBlue, Fade, Ghost } from "../lib/colors"
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
  &.${transitionName}-enter {
    opacity: 0;
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transition: opacity ${transitionDuration}ms ease-in;
  }

  &.${transitionName}-exit {
    opacity: 1;
  }

  &.${transitionName}-exit-active {
    opacity: 0;
    transition: opacity ${transitionDuration}ms ease-out;
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
                <Header6>What can I measure?</Header6>
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
                    tCheck2 will be able to measure infused butter, coconut oil,
                    alcohol and olive oil at initial release. The Expanison Kit
                    allows you to test flower and concentrates. Additional oils
                    and base solvents will be added in future module upgrades.
                    Because we add capabilities based on customer demand, please
                    drop us a line with your vote on the base you want (e.g. VG,
                    honey, grapeseed oil, etc).{" "}
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
                <Header6>How do you clean the tray?</Header6>
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
                    tCheck2 will be able to measure infused butter, coconut oil,
                    alcohol and olive oil at initial release. The Expanison Kit
                    allows you to test flower and concentrates. Additional oils
                    and base solvents will be added in future module upgrades.
                    Because we add capabilities based on customer demand, please
                    drop us a line with your vote on the base you want (e.g. VG,
                    honey, grapeseed oil, etc).{" "}
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
                <Header6>What phone devices are supported?</Header6>
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
                    tCheck2 will be able to measure infused butter, coconut oil,
                    alcohol and olive oil at initial release. The Expanison Kit
                    allows you to test flower and concentrates. Additional oils
                    and base solvents will be added in future module upgrades.
                    Because we add capabilities based on customer demand, please
                    drop us a line with your vote on the base you want (e.g. VG,
                    honey, grapeseed oil, etc).{" "}
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
