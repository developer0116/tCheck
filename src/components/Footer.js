import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Caption } from "./Typography"
import FooterColumnExpand from "./FooterColumnExpand"

import { Flour, Fade, tGreen } from "../lib/colors"
import { sizes } from "../lib/layout"

import logo from "../images/tCheck-logo.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linked-in.png"

const FooterTag = styled.footer`
  background-color: ${Flour};
`

const FooterContainer = styled.div`
  display: flex;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
    align-items: center;
  }
`

const LogoSocialsContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) {
    order: 2;
  }
`

const SocialsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100px;
  justify-content: space-around;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin-top: 30px;
  }
`

const SocialImage = styled.img`
  width: 16px;
  height: 16px;
`

const LogoImg = styled.img`
  margin: 20px auto;
  width: 87px;

  @media (max-width: ${sizes.modifiedTablet}) {
    display: none;
  }
`

const LinksContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${sizes.modifiedTablet}) {
    width: 90%;
    flex-direction: column;
    text-align: center;
  }
`

const FooterLink = styled(Link)`
  font-family: Lato;
  color: ${({ color = tGreen }) => color};
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 0.2px;

  &:hover {
    color: ${({ hoverColor = tGreen }) => hoverColor};
  }
`

const FooterLinkContainer = styled.div`
  padding-bottom: 24px;
`

const CopyRight = styled(Caption)`
  text-align: center;
  margin: 30px 0;
`

const Footer = React.memo(props => {
  return (
    <FooterTag>
      <FooterContainer>
        <LogoSocialsContainer>
          <LogoImg src={logo} />
          <SocialsContainer>
            <SocialImage src={facebook} />
            <SocialImage src={instagram} />
            <SocialImage src={linkedIn} />
          </SocialsContainer>
          {/* <StaticQuery
              query={graphql`
                query {
                  logo: file(relativePath: { eq: "tCheck-logo.png" }) {
                    childImageSharp {
                      fixed(width: 88, height: 43) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                  facebook: file(relativePath: { eq: "facebook.png" }) {
                    childImageSharp {
                      fixed(width: 24, height: 24) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                  instagram: file(relativePath: { eq: "instagram.png" }) {
                    childImageSharp {
                      fixed(width: 24, height: 24) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                  linkedIn: file(relativePath: { eq: "linked-in.png" }) {
                    childImageSharp {
                      fixed(width: 24, height: 24) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              `}
              render={data => {
                return (
                  <>
                    <Img fixed={data.logo.childImageSharp.fixed} />
                    <Img fixed={data.facebook.childImageSharp.fixed} />
                    <Img fixed={data.instagram.childImageSharp.fixed} />
                    <Img fixed={data.linkedIn.childImageSharp.fixed} />
                  </>
                )
              }}
            /> */}
        </LogoSocialsContainer>
        <LinksContainer>
          <FooterColumnExpand headerText="Company">
            <FooterLinkContainer>
              <FooterLink color={Fade}>About</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Mission Statement</FooterLink>
            </FooterLinkContainer>
          </FooterColumnExpand>
          <FooterColumnExpand headerText="Work with Us">
            <FooterLinkContainer>
              <FooterLink color={Fade}>Affiliate Program</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Wholesale</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Careers</FooterLink>
            </FooterLinkContainer>
          </FooterColumnExpand>
          <FooterColumnExpand headerText="Legal">
            <FooterLinkContainer>
              <FooterLink color={Fade}>Agreements</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Privacy</FooterLink>
            </FooterLinkContainer>
          </FooterColumnExpand>
          <FooterColumnExpand headerText="Support">
            <FooterLinkContainer>
              <FooterLink color={Fade}>How-to Videos</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>User Manuals</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>FAQs</FooterLink>
            </FooterLinkContainer>
          </FooterColumnExpand>
        </LinksContainer>
      </FooterContainer>
      <CopyRight>©2019 Engineered Medical Technologies. Inc</CopyRight>
    </FooterTag>
  )
})

Footer.propTypes = {}

export default Footer
