import React from "react"
import styled from "styled-components"

import { Body, Header4 } from "./Typography"

import { Flour } from "../lib/colors"
import { sizes } from "../lib/layout"

import AppStorePicture from "../images/app-store.svg"
import GoogleStorePicture from "../images/google-play.svg"
import AppExampleImage from "../images/app_download.svg"

const AppContainer = styled.section`
  display: flex;
  background-color: ${Flour};
  padding: 3rem 0 0 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    border-radius: 0px;
    margin: 3rem 0 0 0;
    padding: 3rem 0;
  }
`

const AppTextContainer = styled.div`
  width: 41%;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 45%;
    margin: 0 0 40px 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: 85%;
    margin: 2rem auto 0;
    text-align: center;
  }
`

const Header = styled(Header4)`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1.5rem;
    flex-direction: column;
    border-radius: 0px;
    margin-bottom: 1.5rem;
  }
`

const AppBody = styled(Body)`
  margin-bottom: 1.5rem;
`

const AppImage = styled.img`
  width: 50%;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    border-radius: 0px;
    margin: 100px 0 0 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: 85%;
    margin: 0 auto;
  }
`

const AppStoreImg = styled.img`
  max-width: 8.75rem;
  width: 43%;
  margin-right: 1rem;

  transition: all 300ms 0s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.4);
    }
  }
`

const AppCTA = () => {
  return (
    <AppContainer>
      <AppImage src={AppExampleImage} />
      <AppTextContainer>
        <Header>Get the tCheck app</Header>
        <AppBody secondary>
          Collect live readings of your sample in minutes using the tCheck 2 and
          your phone. Test infused olive oil, coconut oil, alcohol, or butter.
        </AppBody>
        <a href="https://play.google.com/store/apps/details?id=me.tcheck.tc2">
          <AppStoreImg src={GoogleStorePicture} />
        </a>
        <a href="https://itunes.apple.com/us/app/tcheck/id1325740228?mt=8">
          <AppStoreImg src={AppStorePicture} />
        </a>
      </AppTextContainer>
    </AppContainer>
  )
}

export default AppCTA
