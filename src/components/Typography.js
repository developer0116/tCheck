import styled from "styled-components"
import { Ink, Flour, Fade } from "../lib/colors"

// 72px
const Header1 = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.89;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

// 56px
const Header2 = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

// 48px
const Header3 = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

// 40px
const Header4 = styled.h4`
  font-size: 2.5rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

// 32px
const Header5 = styled.h5`
  font-size: 2rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

// 24px
const Header6 = styled.h6`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

// 24px
const Lead = styled.div`
  font-family: Lato;
  font-size: 1.5rem;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${({ color = Ink }) => {
    return color
  }};
`

// 16px
const Body = styled.p`
  font-family: Lato;
  font-size: 1rem;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 500)};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${props => (props.secondary ? Fade : props.inverse ? Flour : Ink)};
`

// 12px
const Caption = styled.p`
  font-family: Lato;
  font-size: 0.75rem;
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
