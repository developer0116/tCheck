import React from "react"
import styled from "styled-components"

import { Body } from "./Typography"

import { tGreen, Dada, Flour } from "../lib/colors"
import { sizes } from "../lib/layout"

import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linked-in.png"

const CustomerSegmentVPContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  max-width: 66.5rem;
  margin: -100px auto 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  background-color: ${Flour};

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
    align-items: center;
  }
`

const CustomerSegmentVP = styled.div`
  text-align: center;
  width: 13.5rem;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 40px 0;
  }
`

const CustomerSegmentVPImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
`

const Line = styled.span`
  border: 1px solid ${Dada};
`

const CustomerSegmentVPText = styled(Body)`
  margin-top: 1rem;
  color: ${tGreen};
  font-size: 1.25rem;
`

const CustomerSegmentValueProps = React.memo(() => {
  return (
    <CustomerSegmentVPContainer>
      <CustomerSegmentVP>
        <CustomerSegmentVPImg src={facebook} />
        <CustomerSegmentVPText>
          Improve strains through custom hybrids
        </CustomerSegmentVPText>
      </CustomerSegmentVP>
      <Line />
      <CustomerSegmentVP>
        <CustomerSegmentVPImg src={instagram} />
        <CustomerSegmentVPText>A/B test crop</CustomerSegmentVPText>
      </CustomerSegmentVP>
      <Line />
      <CustomerSegmentVP>
        <CustomerSegmentVPImg src={linkedIn} />
        <CustomerSegmentVPText>Harvest at peak potency</CustomerSegmentVPText>
      </CustomerSegmentVP>
    </CustomerSegmentVPContainer>
  )
})

export default CustomerSegmentValueProps