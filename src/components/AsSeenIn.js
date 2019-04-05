import React from "react"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"

import { Ghost } from "../lib/colors"
import { sizes } from "../lib/layout"

const ASIContainer = styled.div`
  background-color: ${Ghost};
  margin: 0 -100px;
  padding: 40px;
`

const Header = styled(Header4)`
  text-align: center;
`

const PartnerRow = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
    align-items: center;
  }
`

const PartnerLogo = styled.div`
  width: 100px;
  font-size: 40px;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 10px 0;
  }
`

const AsSeenIn = () => {
  return (
    <ASIContainer>
      <Header>As Seen In</Header>
      <PartnerRow>
        <PartnerLogo>Sensi</PartnerLogo>
        <PartnerLogo>High Times</PartnerLogo>
        <PartnerLogo>dope</PartnerLogo>
      </PartnerRow>
    </ASIContainer>
  )
}

export default AsSeenIn
