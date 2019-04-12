import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { tBlue, Fade, Ghost } from "../lib/colors"

const CustomerSegmentQ2Container = styled.section`
  margin: 0 -80px;
  display: flex;
  justify-content: space-between;
  padding: 6rem;
  background-color: ${Ghost};
`

const CustomerSegmentQ2Img = styled.div`
  background-color: ${tBlue};
  width: 28rem;
  height: 21.5rem;
`

const CustomerSegmentQ2TextContainer = styled.div`
  max-width: 38.75rem;
`
const CustomerSegmentQ2Header = styled(Header5)``

const CustomerSegmentQ2Paragraph1 = styled(Body)`
  margin-top: 2rem;
  font-size: 1.25rem;
  color: ${Fade};
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
