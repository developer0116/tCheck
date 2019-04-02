import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Header6, Caption } from "./Typography"

import { Flour, Fade, tGreen } from "../lib/colors"
import logo from "../images/tCheck-logo.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linked-in.png"

const FooterTag = styled.footer`
  background-color: ${Flour};
`

const FooterContainer = styled.div`
  display: flex;
`

const LogoSocialsContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SocialsContainer = styled.div`
  margin: 0 auto;
`

const SocialImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`

const LogoImg = styled.img`
  margin: 20px auto;
  width: 87px;
`

const LinksContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
`

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 20px;
`

const Header = styled(Header6)`
  margin-bottom: 20px;
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
          <LinksColumn>
            <Header color={tGreen}>Company</Header>
            <FooterLinkContainer>
              <FooterLink color={Fade}>About</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Mission Statement</FooterLink>
            </FooterLinkContainer>
          </LinksColumn>
          <LinksColumn>
            <Header color={tGreen}>Work with Us</Header>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Affiliate Program</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Wholesale</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Careers</FooterLink>
            </FooterLinkContainer>
          </LinksColumn>
          <LinksColumn>
            <Header color={tGreen}>Legal</Header>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Agreements</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Privacy</FooterLink>
            </FooterLinkContainer>
          </LinksColumn>
          <LinksColumn>
            <Header color={tGreen}>Support</Header>
            <FooterLinkContainer>
              <FooterLink color={Fade}>How-to Videos</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>User Manuals</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>FAQs</FooterLink>
            </FooterLinkContainer>
          </LinksColumn>
        </LinksContainer>
      </FooterContainer>
      <CopyRight>©2019 Engineered Medical Technologies. Inc</CopyRight>
    </FooterTag>
  )
})

Footer.propTypes = {}

export default Footer
