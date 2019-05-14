import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import Button from "./Button"
import MobileMenuIcon from "./MobileMenuIcon"

import { Flour, Ink, tBlue } from "../lib/colors"
import { maxWidth, sizes } from "../lib/layout"
import Logo from "../images/tCheck-logo.png"

const HeaderTag = styled.header`
  background-color: ${Flour};
  position: fixed;
  z-index: 10;
  width: 100%;
`

const HeaderContainer = styled.div`
  max-width: ${maxWidth}px;
  margin: 0 auto;
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 60px;

  @media (max-width: ${sizes.modifiedTablet}) {
    height: unset;
    padding: 20px;
  }
`

const TLink = styled(Link)`
  font-family: Lato;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.29;
  letter-spacing: normal;
  text-decoration: none;
  color: ${Ink};
  font-size: 0.875rem;

  &:hover {
    color: ${tBlue};
  }
`

const ExternalLink = styled.a`
  font-family: Lato;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.29;
  letter-spacing: normal;
  text-decoration: none;
  color: ${Ink};
  font-size: 0.875rem;

  &:hover {
    color: ${tBlue};
  }
`

const LogoImg = styled.img`
  width: 87px;
  height: 41px;

  @media (max-width: ${sizes.modifiedTablet}) {
    order: -1;
  }
`

const LinksButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) {
    ${({ open }) => {
      return open
        ? `width: 100%; order: 2; flex-direction: column; align-items: flex-start; z-index: 2; background-color: white;`
        : `display: none`
    }}
  }
`

const LinkContainer = styled.div`
  margin: 0 30px 0 0;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 11px 0;
  }
`

const ResponsiveButton = styled(Button)`
  cursor: pointer;

  @media (max-width: ${sizes.modifiedTablet}) {
    display: none;
  }
`

const MobileResponsiveButton = styled(Button)`
  display: none;
  cursor: pointer;

  @media (max-width: ${sizes.modifiedTablet}) {
    display: unset;
  }
`

const MobileButtonLink = styled(Link)`
  ${({ isProductPage }) => {
    return isProductPage ? `display: none !important;` : null
  }}
  display: none;
  text-decoration: none;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin-left: auto;
    display: unset;
  }
`

const ButtonLink = styled(Link)`
  ${({ isProductPage }) => {
    return isProductPage ? `display: none !important;` : null
  }}
  text-decoration: none;
`

const MobileMenuIconStyles = styled.div`
  display: none;

  @media (max-width: ${sizes.modifiedTablet}) {
    display: block;
    margin-left: 2rem;
  }
`

const Header = React.memo(({ isProductPage }) => {
  const [open, toggleOpen] = useState(false)

  return (
    <HeaderTag>
      <HeaderContainer>
        <TLink to="/">
          <LogoImg src={Logo} />
        </TLink>
        <LinksButtonContainer open={open}>
          <LinkContainer>
            <TLink to="/makers" activeStyle={{ color: tBlue }}>
              Edible Makers
            </TLink>
          </LinkContainer>
          <LinkContainer>
            <TLink to="/growers" activeStyle={{ color: tBlue }}>
              Growers
            </TLink>
          </LinkContainer>
          <LinkContainer>
            <TLink to="/processors" activeStyle={{ color: tBlue }}>
              Processors
            </TLink>
          </LinkContainer>
          <LinkContainer>
            <ExternalLink href="https://medium.com/tcheck" target="_blank">
              Blog
            </ExternalLink>
          </LinkContainer>
          <LinkContainer>
            <ExternalLink
              href="https://medium.com/tcheck/i-need-help-e7ede86f2191"
              target="_blank"
            >
              Support
            </ExternalLink>
          </LinkContainer>
          <ButtonLink to="/product" isProductPage={isProductPage}>
            <ResponsiveButton>Buy Now</ResponsiveButton>
          </ButtonLink>
        </LinksButtonContainer>
        <MobileButtonLink to="/product" isProductPage={isProductPage}>
          <MobileResponsiveButton>Buy Now</MobileResponsiveButton>
        </MobileButtonLink>

        <MobileMenuIconStyles
          onClick={() => {
            toggleOpen(!open)
          }}
        >
          <MobileMenuIcon />
        </MobileMenuIconStyles>
      </HeaderContainer>
    </HeaderTag>
  )
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
