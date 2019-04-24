import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { tBlue, Fade, Ghost } from "../lib/colors"
import { sizes } from "../lib/layout"

const CustomerSegmentQ2Container = styled.section`
  margin: 0 -80px;
  display: flex;
  justify-content: space-around;
  padding: 6rem 0;
  background-color: ${Ghost};
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
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

const CustomerSegmentQ2Img = styled.div`
  background-color: ${tBlue};
  width: 28rem;
  height: 21.5rem;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 21rem;
    height: 15.4rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: 90%;
  }
`

const CustomerSegmentQ2TextContainer = styled.div`
  max-width: 38.75rem;

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
const CustomerSegmentQuestion2 = React.memo(({ header, body }) => {
  return (
    <CustomerSegmentQ2Container>
      <CustomerSegmentQ2TextContainer>
        <CustomerSegmentQ2Header>{header}</CustomerSegmentQ2Header>
        <CustomerSegmentQ2Paragraph1 secondary>
          {body}
        </CustomerSegmentQ2Paragraph1>
      </CustomerSegmentQ2TextContainer>
      <CustomerSegmentQ2Img />
    </CustomerSegmentQ2Container>
  )
})

export default CustomerSegmentQuestion2
