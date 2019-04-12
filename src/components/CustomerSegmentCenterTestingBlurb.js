import React from "react"
import styled from "styled-components"

import { Body, Header4 } from "./Typography"

const CustomerSegmentBlurbContainer = styled.section`
  margin: 4.5rem 0;
  text-align: center;
`

const Header = styled(Header4)`
  margin: 0 auto;
  max-width: 40.8rem;
`

const CustomerSegmentBlurb = styled(Body)`
  max-width: 77rem;
  margin-top: 2rem;
  font-size: 1.25rem;
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
