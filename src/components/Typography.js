import styled from "styled-components"
import { Ink, Flour, Fade } from "../lib/colors"

const Header1 = styled.h1`
  font-size: 72px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.89;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

const Header2 = styled.h2`
  font-size: 56px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

const Header3 = styled.h3`
  font-size: 48px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

const Header4 = styled.h4`
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

const Header5 = styled.h5`
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

const Header6 = styled.h6`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

const Lead = styled.div`
  font-family: Lato;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

const Body = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 500)};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${props => (props.secondary ? Fade : props.inverse ? Flour : Ink)};
`

const Caption = styled.p`
  font-family: Lato;
  font-size: 12px;
  font-weight: ${({ secondary }) => (secondary ? 300 : 500)};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 0.2px;
  color: ${({ color = Ink }) => color};
`

export {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Lead,
  Body,
  Caption,
}
