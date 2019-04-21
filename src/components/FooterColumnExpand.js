import React, { useState } from "react"
import styled from "styled-components"

import { Header6 } from "./Typography"

import { sizes } from "../lib/layout"
import { tGreen, Concrete } from "../lib/colors"

import Arrow from "../images/ic_chevron.svg"

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    flex: unset;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    padding-top: 20px;
    cursor: pointer;
    ${({ open }) => {
      return open ? `` : `border-bottom: solid 1px ${Concrete};`
    }}
  }
`

const Header = styled(Header6)`
  margin-bottom: 1rem;
`

const ChevronArrowImg = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0px;
  top: 5px;

  ${({ flip }) => {
    return flip ? `transform: rotate(180deg);` : null
  }}

  display: none;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    display: unset;
  }
`

const HeaderArrowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    justify-content: center;
  }
`

const DisplayDiv = styled.div`
  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    border-bottom: solid 1px ${Concrete};
    ${({ open }) => {
      return open ? `display: unset;` : `display: none;`
    }}
  }
`

const FooterColumnExpand = React.memo(({ headerText, children }) => {
  const [open, toggleOpenClose] = useState(false)

  return (
    <LinksColumn
      onClick={() => {
        toggleOpenClose(!open)
      }}
      open={open}
    >
      <HeaderArrowWrapper>
        <Header color={tGreen}>{headerText}</Header>
        <ChevronArrowImg src={Arrow} flip={open} />
      </HeaderArrowWrapper>
      <DisplayDiv open={open}>{children}</DisplayDiv>
    </LinksColumn>
  )
})

export default FooterColumnExpand
