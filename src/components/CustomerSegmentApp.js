import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { tBlue, Fade, Ghost } from "../lib/colors"
import { sizes } from "../lib/layout"

const CustomerSegmentQ2Container = styled.section`
  margin: 0 -80px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${Ghost};
  align-items: center;
  ${({ background }) => {
    return `background: url(${background}) no-repeat; background-size: cover;`
  }}

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${
  sizes.mobileL
}) {
    justify-content: space-around;
    padding: 3rem 0;
    margin: 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin: 0;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 3rem;
  }
`

const CustomerSegmentQ2Img = styled.img`
  height: 100%;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 21rem;
    height: 15.4rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: 90%;
  }
`

const CustomerSegmentQ2TextContainer = styled.div`
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
const CustomerSegmentQ2Header = styled(Header5)`
  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1.5rem;
  }
`

const CustomerSegmentQ2Paragraph1 = styled(Body)`
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
    <CustomerSegmentQ2Container background={background}>
      <CustomerSegmentQ2TextContainer>
        <CustomerSegmentQ2Header>{header}</CustomerSegmentQ2Header>
        <CustomerSegmentQ2Paragraph1 secondary>
          {body}
        </CustomerSegmentQ2Paragraph1>
      </CustomerSegmentQ2TextContainer>
      <CustomerSegmentQ2Img src={app} />
    </CustomerSegmentQ2Container>
  )
})

export default CustomerSegmentApp
