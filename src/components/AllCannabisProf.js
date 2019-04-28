import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import ProductCarousel from "./ProductCarousel"

import productCarouselImages from "../lib/productCarouselImages"

import { Body, Lead, Header4 } from "./Typography"

import { Ghost, tGreen, tBlue } from "../lib/colors"
import { sizes } from "../lib/layout"

const CannabisContainer = styled.section`
  display: flex;
  background-color: ${Ghost};
  padding: 3.5rem 5rem 3rem;
  margin: 0px -80px 7rem;
  justify-content: space-between;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`

const CannabisTextContainer = styled.div`
  width: 33%;

  @media (max-width: ${sizes.modifiedTablet}) {
    width: 100%;
    text-align: center;
    margin: 0 0 40px 0;
  }
`

const Header = styled(Header4)`
  margin-bottom: 2rem;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 40px 40px;
  }
`

const CannabisLead = styled(Lead)`
  margin-top: 1.5rem;
`

const CannabisBody = styled(Body)`
  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 0 20px 10px;
  }
`

const CannabisLink = styled(Link)`
  text-decoration: none;
  color: ${tBlue};
  font-family: Lato;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.29;
  letter-spacing: normal;
  font-size: 0.875rem;
`

const CannabisProfCarousel = styled.div`
  position: relative;
  top: 125px;
  margin-left: auto;
  width: 62%;

  @media (max-width: ${sizes.modifiedTablet}) {
    position: unset;
    width: 100%;
    height: auto;
  }
`

const ArrowIcon = styled(FontAwesomeIcon)`
  transition: all 300ms 0s ease;
  position: relative;
  top: 1px;

  ${CannabisLink}:hover & {
    transform: translateX(4px);
  }
`

const AllCannabisProf = () => {
  return (
    <CannabisContainer>
      <CannabisTextContainer>
        <Header>For every cannabis professional</Header>
        <CannabisLead color={tGreen}>Growers</CannabisLead>
        <CannabisBody secondary>
          Indoor and outdoor growers face different challenges, testing
          shouldn't be one of them.
        </CannabisBody>
        <CannabisLink to="/growers">
          Learn More <ArrowIcon icon={faLongArrowAltRight} />
        </CannabisLink>

        <CannabisLead color={tGreen}>Processors</CannabisLead>
        <CannabisBody secondary>
          Whether you make your own, or buy white label cannabis oil, verify
          your final product.
        </CannabisBody>
        <CannabisLink to="/processors">
          Learn More <ArrowIcon icon={faLongArrowAltRight} />
        </CannabisLink>

        <CannabisLead color={tGreen}>Edible Makers</CannabisLead>
        <CannabisBody secondary>
          Never have another edible mishap with tCheck in hand.
        </CannabisBody>
        <CannabisLink to="/makers">
          Learn More <ArrowIcon icon={faLongArrowAltRight} />
        </CannabisLink>
      </CannabisTextContainer>
      <CannabisProfCarousel>
        <ProductCarousel>
          {productCarouselImages["professionals"].map(img => {
            return (
              <div>
                <img src={img} />
              </div>
            )
          })}
        </ProductCarousel>
      </CannabisProfCarousel>
    </CannabisContainer>
  )
}

export default AllCannabisProf
