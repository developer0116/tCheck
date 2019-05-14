import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Caption } from "./Typography"
import FooterColumnExpand from "./FooterColumnExpand"

import { Flour, Fade, tGreen, tBlue } from "../lib/colors"
import { sizes } from "../lib/layout"

import logo from "../images/tCheck-logo.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedIn from "../images/linked-in.png"

const FooterTag = styled.footer`
  background-color: ${Flour};
  margin-top: 3rem;
`

const FooterContainer = styled.div`
  display: flex;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column;
    align-items: center;
  }
`

const LogoSocialsContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    order: 2;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    order: 2;
  }
`

const SocialsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100px;
  justify-content: space-around;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
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

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    display: none;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    display: none;
  }
`

const LinksContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    width: 100%;
    justify-content: space-around;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: 90%;
    flex-direction: column;
    text-align: center;
  }
`

const FooterLink = styled.a`
  font-family: Lato;
  color: ${({ color = tGreen }) => color};
  text-decoration: none;
  cursor: pointer;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.29;
  letter-spacing: normal;
  text-decoration: none;
  font-size: 0.875rem;
  letter-spacing: 0.2px;

  &:hover {
    color: ${({ hoverColor = tBlue }) => hoverColor};
  }
`

const FooterLinkContainer = styled.div`
  padding-bottom: 1.5rem;
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
            <a
              alt="facebook logo link"
              href="https://www.facebook.com/t.chker/"
              target="_blank"
            >
              <SocialImage src={facebook} />
            </a>
            <a
              alt="instagram logo link"
              href="https://www.instagram.com/tcheck.me/"
              target="_blank"
            >
              <SocialImage src={instagram} />
            </a>
            <a
              alt="linked in logo link"
              href="https://www.linkedin.com/company/17901741"
              target="_blank"
            >
              <SocialImage src={linkedIn} />
            </a>
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
              <FooterLink
                href="https://medium.com/tcheck/about-engineered-medical-technologies-e76ce1544cb8"
                target="_blank"
                color={Fade}
              >
                About
              </FooterLink>
            </FooterLinkContainer>
            {/* <FooterLinkContainer>
              <FooterLink color={Fade}>Mission Statement</FooterLink>
            </FooterLinkContainer> */}
          </FooterColumnExpand>
          <FooterColumnExpand headerText="Work with Us">
            <FooterLinkContainer>
              <FooterLink
                target="_blank"
                href="https://tcheckme.growsumo.com"
                color={Fade}
              >
                Affiliate Program
              </FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink color={Fade}>Wholesale</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink
                target="_blank"
                href="https://www.indeed.com/cmp/Tcheck-1"
                color={Fade}
              >
                Careers
              </FooterLink>
            </FooterLinkContainer>
          </FooterColumnExpand>
          <FooterColumnExpand headerText="Legal">
            <FooterLinkContainer>
              <FooterLink
                color={Fade}
                target="_blank"
                href="https://medium.com/tcheck/tcheck-agreements-ee293283431f"
              >
                Agreements
              </FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink
                target="_blank"
                href="https://medium.com/tcheck/tcheck-privacy-policy-36fdf200ce9"
                color={Fade}
              >
                Privacy
              </FooterLink>
            </FooterLinkContainer>
          </FooterColumnExpand>
          <FooterColumnExpand headerText="Support">
            <FooterLinkContainer>
              <FooterLink
                target="_blank"
                href="https://www.youtube.com/channel/UCj842lZb3wYeOuK3XB9nQSA"
                color={Fade}
              >
                How-to Videos
              </FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink
                target="_blank"
                href="https://medium.com/tcheck/tcheck-2-user-manual-c94fe50b2a47"
                color={Fade}
              >
                User Manuals
              </FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLink
                target="_blank"
                href="https://medium.com/tcheck/site-faqs-a69db16e2c1d"
                color={Fade}
              >
                FAQs
              </FooterLink>
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
