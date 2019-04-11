import React from "react"
import styled from "styled-components"

import { Body, Lead } from "./Typography"

import { Flour, Fade, tGreen, Ink } from "../lib/colors"
import { sizes } from "../lib/layout"

import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linked-in.png"

const ValuePropsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 4.5rem 0;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
    align-items: center;
  }
`

const ValueProp = styled.div`
  text-align: center;
  width: 250px;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 40px 0;
  }
`

const ValuePropImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;
`

const ValuePropHeader = styled(Lead)`
  margin-top: 1.5rem;
`

const ValuePropText = styled(Body)`
  margin-top: 1rem;
`

const ValuePropsRow = React.memo(() => {
  return (
    <ValuePropsContainer>
      <ValueProp>
        <ValuePropImg src={facebook} />
        <ValuePropHeader color={tGreen}>Move fast.</ValuePropHeader>
        <ValuePropText>
          60 seconds to test your infusions. 5 minutes to test your flower and
          concentrates.
        </ValuePropText>
      </ValueProp>
      <ValueProp>
        <ValuePropImg src={instagram} />
        <ValuePropHeader color={tGreen}>Spare your wallet.</ValuePropHeader>
        <ValuePropText>
          Knowledge shouldn’t be expensive, tCheck is an affordable solution.
        </ValuePropText>
      </ValueProp>
      <ValueProp>
        <ValuePropImg src={linkedIn} />
        <ValuePropHeader color={tGreen}>Start testing in mins.</ValuePropHeader>
        <ValuePropText>
          Designed for everyone, tCheck is easy to use and
        </ValuePropText>
      </ValueProp>
    </ValuePropsContainer>
  )
})

export default ValuePropsRow
