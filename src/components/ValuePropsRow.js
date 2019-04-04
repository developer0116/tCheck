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
  padding: 60px 0;
  width: 90%;
  margin: 0 auto;

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
  width: 115px;
  height: 115px;
`

const ValuePropHeader = styled(Lead)`
  margin: 10px 0;
`

const ValuePropText = styled(Body)``

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
