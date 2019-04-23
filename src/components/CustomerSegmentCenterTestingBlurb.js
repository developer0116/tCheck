import React from "react"
import styled from "styled-components"

import { Body, Header4 } from "./Typography"

import { sizes } from "../lib/layout"

const CustomerSegmentBlurbContainer = styled.section`
  margin: 4.5rem 0;
  text-align: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    margin: 3rem 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
  }
`

const Header = styled(Header4)`
  margin: 0 auto;
  max-width: 29.8rem;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
  }
`

const CustomerSegmentBlurb = styled(Body)`
  max-width: 77rem;
  margin-top: 2rem;
  font-size: 1.25rem;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1rem;
  }
`

// What do I call this thing?
const CustomerSegmentCenterTestingBlurb = React.memo(({ header, body }) => {
  return (
    <CustomerSegmentBlurbContainer>
      <Header>{header}</Header>
      <CustomerSegmentBlurb secondary>{body}</CustomerSegmentBlurb>
    </CustomerSegmentBlurbContainer>
  )
})

export default CustomerSegmentCenterTestingBlurb
