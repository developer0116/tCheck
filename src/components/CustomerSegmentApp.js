import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { Fade, Ghost } from "../lib/colors"
import { sizes } from "../lib/layout"

const CustomerSegmentAppContainer = styled.section`
  margin: 0 -80px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${Ghost};
  align-items: center;
  padding: 3rem 0 0 0;
  ${({ background }) => {
    return `background: url(${background}) no-repeat; background-size: cover; background-position: bottom;`
  }}

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${
  sizes.mobileL
}) {
    justify-content: space-around;    
    margin: 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin: 0;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 3rem;
    background-position: unset;
  }
`

const CustomerSegmentAppImg = styled.img`
  height: 100%;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    height: 26rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    height: 26rem;
  }
`

const CustomerSegmentAppTextContainer = styled.div`
  max-width: 30rem;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 50%;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: 90%;
    margin-top: 2rem;
    flex-direction: column;
    text-align: center;
    order: 2;
  }
`
const CustomerSegmentAppHeader = styled(Header5)`
  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1.5rem;
  }
`

const CustomerSegmentAppParagraph = styled(Body)`
  margin-top: 2rem;
  font-size: 1.25rem;
  color: ${Fade};

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1rem;
  }
`

// What do I call this thing?
const CustomerSegmentApp = React.memo(({ background, header, body, app }) => {
  return (
    <CustomerSegmentAppContainer background={background}>
      <CustomerSegmentAppTextContainer>
        <CustomerSegmentAppHeader>{header}</CustomerSegmentAppHeader>
        <CustomerSegmentAppParagraph secondary>
          {body}
        </CustomerSegmentAppParagraph>
      </CustomerSegmentAppTextContainer>
      <CustomerSegmentAppImg src={app} />
    </CustomerSegmentAppContainer>
  )
})

export default CustomerSegmentApp
