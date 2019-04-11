import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"

import { Flour, tGreen, tBlue, Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

import AppStorePicture from "../images/app-store.svg"
import GoogleStorePicture from "../images/google-play.svg"

const AppContainer = styled.section`
  display: flex;
  background-color: ${Flour};
  padding: 3.5rem 5rem 3rem;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`

const AppTextContainer = styled.div`
  width: 33%;

  @media (max-width: ${sizes.modifiedTablet}) {
    width: 100%;
    text-align: center;
    margin: 0 0 40px 0;
  }
`

const Header = styled(Header4)`
  margin-bottom: 3rem;

  @media (max-width: ${sizes.modifiedTablet}) {
    font-size: 1.5rem;
  }
`

const AppBody = styled(Body)`
  margin-bottom: 1.5rem;
`

const AppStoreImg = styled.img`
  width: 140px;
  margin-right: 1rem;
`

const AppCTA = () => {
  return (
    <AppContainer>
      <AppTextContainer>
        <Header>Get the tCheck app</Header>
        <AppBody secondary>
          Collect live readings of your sample in minutes using the tCheck 2 and
          your phone. Test infused olive oil, coconut oil, alcohol, or butter.
        </AppBody>
        <AppStoreImg src={GoogleStorePicture} />
        <AppStoreImg src={AppStorePicture} />
      </AppTextContainer>
    </AppContainer>
  )
}

export default AppCTA
