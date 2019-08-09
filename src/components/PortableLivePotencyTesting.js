import React from "react"
import styled from "styled-components"

import { Body, Lead, Header5 } from "./Typography"

import { tGreen, Fade } from "../lib/colors"
import { sizes } from "../lib/layout"


import Alcohol from "../images/ic_alcohol.svg"
import Oliveoil from "../images/ic_oliveoil.svg"
import Butter from "../images/ic_butter.svg"
import Coconutoil from "../images/ic_coconutoil.svg"
import Concen from "../images/ic_concen.svg"
import Flower from "../images/ic_flower.svg"

const Title = styled(Header5)`
  margin-bottom: 2rem;
  position: relative;
  max-width: 530px;
    margin: auto;
    width: 100%;

    @media (max-width: ${sizes.mobileLg}) and (min-width: ${sizes.mobileS}) {
        padding: 0px 12px;
      }
  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin-bottom: 2rem;
    &:before {
      content: unset;
    }
  }
`

const SubTitle = styled.p`
    max-width: 570px;
    margin: auto;
    font-size: 16pt;
    font-family: Lato;
    font-weight: 500;
    width: 100%;
    color: ${Fade};
    margin-top: 32px;


    @media (max-width: ${sizes.mobileLg}) and (min-width: ${sizes.mobileS}) {
        font-size: 16px;
        width: 90%;
        margin-bottom: 40px;
      } 
`

const ValuePropsContainer = styled.section`
    text-align: center;
    justify-content: space-around;
    padding: 56px 0;
    width: 100%;

  @media (max-width: ${sizes.mobileLg}) and (min-width: ${sizes.mobileL}) {
    padding: 4rem 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    align-items: center;
    padding:0px;
  }
`

const ValueProp = styled.div`
  text-align: center;
  width: 10rem;
  display: inline-block;
  margin-top: 50px;

  @media (max-width: ${sizes.mobileLg}) and (min-width: ${sizes.mobileL}) {
    margin-bottom: 0px;
    width: 33%;
    margin-top: 25px;

  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin-bottom: 0px;
    width: 33%;
    margin-top: 25px;
  }
`

const ValuePropImg = styled.img`
    width: 48px;
    height: 48px;

    @media (max-width: ${sizes.mobileLg}) and (min-width: ${sizes.mobileL}) {
        width: 38px;
        height: 38px;
    
      }    
    @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
        width: 38px;
        height: 38px;
    }
  
`

const ValuePropHeader = styled(Lead)`
  font-size: 1.25rem;
  margin: 16px;


  @media (max-width: ${sizes.mobileLg}) and (min-width: ${sizes.mobileL}) {
    
    font-size: 1rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 0.8rem;
  }

`

const ValuePropText = styled(Body)`
  margin-top: 1rem;
`

const PortableLivePotencyTesting = React.memo(() => {
  return (
    <ValuePropsContainer>
        <Title>Test for THC, THCa, or CBD</Title>
        <SubTitle>Select your infusion, cannabis flower, or concentrate and determine potency and dominant cannabinoid in just a couple of mins.</SubTitle>
        <ValueProp>
            <ValuePropImg src={Oliveoil} />
            <ValuePropHeader color={Fade}>Olive Oil</ValuePropHeader>
        </ValueProp>

        <ValueProp>
            <ValuePropImg src={Coconutoil} />
            <ValuePropHeader color={Fade}>Coconut Oil</ValuePropHeader>
        </ValueProp>

        <ValueProp>
            <ValuePropImg src={Butter} />
            <ValuePropHeader color={Fade}>Butter</ValuePropHeader>
        </ValueProp>

        <ValueProp>
            <ValuePropImg src={Alcohol} />
            <ValuePropHeader color={Fade}>Alcohol</ValuePropHeader>
        </ValueProp>

        <ValueProp>
            <ValuePropImg src={Flower} />
            <ValuePropHeader color={Fade}>Cannabis (THCa)</ValuePropHeader>
        </ValueProp>

        <ValueProp>
            <ValuePropImg src={Concen} />
            <ValuePropHeader color={Fade}>Concentrate</ValuePropHeader>
        </ValueProp>

    </ValuePropsContainer>
  )
})

export default PortableLivePotencyTesting
