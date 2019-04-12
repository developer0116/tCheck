import React from "react"
import styled from "styled-components"

import { Header5 } from "./Typography"

import { Ghost, Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

import DopeLogo from "../images/logo_dope.png"
import HighTimesLogo from "../images/logo_hightimes.png"
import SensiLogo from "../images/logo_sensi.png"

const ASIContainer = styled.div`
  background-color: ${Ghost};
  margin: 0 -80px;
  padding: 3rem;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 0;
  }
`

const Header = styled(Header5)`
  text-align: center;
`

const PartnerRow = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
    align-items: center;
  }
`

const PartnerLogo = styled.img`
  height: 75px;
  margin: 0 60px;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 10px 0;
  }
`

const AsSeenIn = () => {
  return (
    <ASIContainer>
      <Header color={Fade}>As Seen In</Header>
      <PartnerRow>
        <PartnerLogo src={SensiLogo} />
        <PartnerLogo src={HighTimesLogo} />
        <PartnerLogo src={DopeLogo} />
      </PartnerRow>
    </ASIContainer>
  )
}

export default AsSeenIn
