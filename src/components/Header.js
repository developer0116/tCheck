import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import Button from "./Button"
import MobileMenuIcon from "./MobileMenuIcon"

import { Flour, Ink, tGreen } from "../lib/colors"
import { maxWidth, sizes } from "../lib/layout"
import Logo from "../images/tCheck-logo.png"

const HeaderTag = styled.header`
  background-color: ${Flour};
`
// box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.5);
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: ${maxWidth}px;
  height: 112px;
  display: flex
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 60px;

  @media (max-width: ${sizes.tablet}) {
    padding: 20px;
    height: 80px;
  }
`

const TLink = styled(Link)`
  text-decoration: none;
  color: ${Ink};
  font-size: 14px;

  &:hover {
    color: ${tGreen};
  }
`

const LogoImg = styled.img`
  width: 87px;
  height: 41px;

  @media (max-width: ${sizes.tablet}) {
    order: -1;
  }
`

const LinksButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${sizes.tablet}) {
    ${({ open }) => {
      return open
        ? `width: 100%;
        order: 2;
        flex-direction: column; align-items: flex-start; z-index: 2; background-color: white; flex: 1 1 100%; margin: 18px -20px; padding-bottom: 10px; padding-left: 20px;`
        : `display: none`
    }}
  }
`

const LinkContainer = styled.div`
  margin: 0 30px 0 0;

  @media (max-width: ${sizes.tablet}) {
    margin: 11px 0;
  }
`

const ResponsiveButton = styled(Button)`
  @media (max-width: ${sizes.tablet}) {
    display: none;
  }
`

const MobileMenuIconStyles = styled.div`
  display: none;

  @media (max-width: ${sizes.tablet}) {
    display: block;
  }
`

const Header = React.memo(props => {
  const [open, toggleOpen] = useState(false)

  return (
    <HeaderTag>
      <HeaderContainer>
        <LogoImg src={Logo} />
        <LinksButtonContainer open={open}>
          <LinkContainer>
            <TLink to="/">Growers</TLink>
          </LinkContainer>
          <LinkContainer>
            <TLink to="/">Processors</TLink>
          </LinkContainer>
          <LinkContainer>
            <TLink to="/">Edible Makers</TLink>
          </LinkContainer>
          <LinkContainer>
            <TLink to="/">Blog</TLink>
          </LinkContainer>
          <LinkContainer>
            <TLink to="/">Support</TLink>
          </LinkContainer>
          <ResponsiveButton>Buy Now</ResponsiveButton>
        </LinksButtonContainer>

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
