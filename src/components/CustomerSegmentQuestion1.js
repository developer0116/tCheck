import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { tBlue, Fade } from "../lib/colors"

const CustomerSegmentQ1Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 6rem 0;
`

const CustomerSegmentQ1Img = styled.div`
  background-color: ${tBlue};
  width: 28rem;
  height: 21.5rem;
`

const CustomerSegmentQ1TextContainer = styled.div`
  max-width: 38.75rem;
`

const CustomerSegmentQ1Header = styled(Header5)``

const CustomerSegmentQ1Paragraph1 = styled(Body)`
  margin-top: 2rem;
  font-size: 1.25rem;
  color: ${Fade};
`

const CustomerSegmentUL = styled.ul`
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  font-family: Lato;
  font-size: 1.25rem;
  color: ${Fade};
`

const CustomerSegmentQ1Paragraph2 = styled(Body)`
  margin-top: 2rem;
  font-size: 1.25rem;
  color: ${Fade};
`

// What do I call this thing?
const CustomerSegmentQuestion1 = React.memo(
  ({ header, paragraph1, list, paragraph2 }) => {
    return (
      <CustomerSegmentQ1Container>
        <CustomerSegmentQ1Img />
        <CustomerSegmentQ1TextContainer>
          <CustomerSegmentQ1Header>{header}</CustomerSegmentQ1Header>
          <CustomerSegmentQ1Paragraph1 secondary>
            {paragraph1}
          </CustomerSegmentQ1Paragraph1>
          <CustomerSegmentUL>
            {list.map(text => {
              return <li>{text}</li>
            })}
          </CustomerSegmentUL>
          <CustomerSegmentQ1Paragraph2>
            {paragraph2}
          </CustomerSegmentQ1Paragraph2>
        </CustomerSegmentQ1TextContainer>
      </CustomerSegmentQ1Container>
    )
  }
)

export default CustomerSegmentQuestion1
