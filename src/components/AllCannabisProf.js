import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"

import { Ghost, tGreen, tBlue } from "../lib/colors"
import { sizes } from "../lib/layout"

import PicPrice from "../images/pic_price.png"

const CannabisContainer = styled.section`
  display: flex;
  background-color: ${Ghost};
  padding: 72px;
  margin: 0px -80px 80px;
  justify-content: space-between;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`

const CannabisTextContainer = styled.div`
  width: 33%;

  @media (max-width: ${sizes.modifiedTablet}) {
    width: 100%;
    text-align: center;
    margin: 0 0 40px 0;
  }
`

const Header = styled(Header4)`
  margin-bottom: 48px;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 40px 40px;
  }
`

const CannabisLead = styled(Lead)`
  margin-top: 16px;
`

const CannabisBody = styled(Body)`
  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 0 20px 10px;
  }
`

const CannabisLink = styled(Link)`
  text-decoration: none;
  color: ${tBlue};
  font-size: 14px;
`

const CannabisProfImg = styled.img`
  position: relative;
  top: 125px;
  margin-left: auto;
  height: 500px;

  @media (max-width: ${sizes.modifiedTablet}) {
    position: unset;
    width: 100%;
    height: auto;
  }
`

const AllCannabisProf = () => {
  return (
    <CannabisContainer>
      <CannabisTextContainer>
        <Header>For every cannabis professional</Header>
        <CannabisLead color={tGreen}>Growers</CannabisLead>
        <CannabisBody secondary>
          Indoor and outdoor growers face different challenges, testing
          shouldn't be one of them.
        </CannabisBody>
        <CannabisLink to="/growers">Learn More</CannabisLink>

        <CannabisLead color={tGreen}>Processors</CannabisLead>
        <CannabisBody secondary>
          Whether you make your own, or buy white label cannabis oil, verify
          your final product.
        </CannabisBody>
        <CannabisLink to="/processors">Learn More</CannabisLink>

        <CannabisLead color={tGreen}>Edible Makers</CannabisLead>
        <CannabisBody secondary>
          Never have another edible mishap with tCheck in hand.
        </CannabisBody>
        <CannabisLink to="/makers">Learn More</CannabisLink>
      </CannabisTextContainer>
      <CannabisProfImg src={PicPrice} />
    </CannabisContainer>
  )
}

export default AllCannabisProf
