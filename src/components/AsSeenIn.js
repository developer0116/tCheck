import React from "react"
import styled from "styled-components"

import { Header5 } from "./Typography"

import { Ghost, Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

import BizJournal from "../images/logo_bizjor.svg"
import HighTimesLogo from "../images/logo_hightimes.png"
import WikiLeaf from "../images/logo_wikileaf.svg"
import DigitalTrends from "../images/logo_digtrends.png"

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
  justify-content: space-evenly;

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

const Link = styled.a`
  &:last-child {
    img {
      height: 2.5rem;
    }
  }
`

const PartnerLogo = styled.img`
  height: auto;
  max-height: 3.75rem;

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
        <Link
          href="https://www.wikileaf.com/thestash/home-marijuana-testing/"
          target="_blank"
        >
          <PartnerLogo src={WikiLeaf} />
        </Link>
        <Link
          href="https://hightimes.com/culture/the-thc-test-lab-in-the-palm-of-your-hand/"
          target="_blank"
        >
          <PartnerLogo src={HighTimesLogo} />
        </Link>
        <Link
          href="https://www.bizjournals.com/sacramento/news/2018/09/18/huge-demand-creates-challenges-for-pot-potency.html"
          target="_blank"
        >
          <PartnerLogo src={BizJournal} />
        </Link>
        <Link
          href="https://www.digitaltrends.com/home/best-cannabis-cooking-gadgets/"
          target="_blank"
        >
          <PartnerLogo src={DigitalTrends} />
        </Link>
      </PartnerRow>
    </ASIContainer>
  )
}

export default AsSeenIn
