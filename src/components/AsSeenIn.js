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

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    margin: 0;
    padding: 2rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin: 0;
  }
`

const Header = styled(Header5)`
  text-align: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1.5rem;
  }
`

const PartnerRow = styled.div`
  margin-top: 2.1rem;
  display: flex;
  justify-content: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    justify-content: space-around;
    margin-top: 2.4rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin-top: 0;
    flex-direction: column;
    align-items: center;
  }
`

const PartnerLogo = styled.img`
  height: 75px;
  margin: 0 60px;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    margin: 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin-top: 2rem;
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
