import React from "react"
import styled from "styled-components"

import { Body } from "./Typography"

import { tGreen, Dada, Flour } from "../lib/colors"
import { sizes } from "../lib/layout"

const CustomerSegmentVPContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 0;
  max-width: 66.5rem;
  margin: -100px auto 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  background-color: ${Flour};

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 90%;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    align-items: center;
  }
`

const CustomerSegmentVP = styled.div`
  text-align: center;
  width: 13.5rem;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    margin: 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
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

const CustomerSegmentValueProps = React.memo(
  ({
    valueProp1Img,
    valueProp2Img,
    valueProp3Img,
    valueProp1Text,
    valueProp2Text,
    valueProp3Text,
  }) => {
    return (
      <CustomerSegmentVPContainer>
        <CustomerSegmentVP>
          <CustomerSegmentVPImg src={valueProp1Img} />
          <CustomerSegmentVPText>{valueProp1Text}</CustomerSegmentVPText>
        </CustomerSegmentVP>
        <Line />
        <CustomerSegmentVP>
          <CustomerSegmentVPImg src={valueProp2Img} />
          <CustomerSegmentVPText>{valueProp2Text}</CustomerSegmentVPText>
        </CustomerSegmentVP>
        <Line />
        <CustomerSegmentVP>
          <CustomerSegmentVPImg src={valueProp3Img} />
          <CustomerSegmentVPText>{valueProp3Text}</CustomerSegmentVPText>
        </CustomerSegmentVP>
      </CustomerSegmentVPContainer>
    )
  }
)

export default CustomerSegmentValueProps
