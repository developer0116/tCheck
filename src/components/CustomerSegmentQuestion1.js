import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { tBlue, Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

const CustomerSegmentQ1Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 6rem 0;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    justify-content: space-around;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 3rem;
    margin: 0;
  }
`

const CustomerSegmentQ1Img = styled.div`
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

const CustomerSegmentQ1TextContainer = styled.div`
  max-width: 38.75rem;
  width: 50%;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 50%;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-top: 2rem;
  }
`

const CustomerSegmentQ1Header = styled(Header5)`
  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1.5rem;
    width: 70%;
    margin: 0 auto;
    text-align: center;
  }
`

const CustomerSegmentQ1Paragraph1 = styled(Body)`
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

const CustomerSegmentUL = styled.ul`
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  font-family: Lato;
  font-size: 1.25rem;
  color: ${Fade};

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1rem;
  }
`

const CustomerSegmentQ1Paragraph2 = styled(Body)`
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
