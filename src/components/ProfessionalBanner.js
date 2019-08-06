import React from "react"
import styled from "styled-components"

import { Lead, Header5 } from "./Typography"

import { Flour, Ghost } from "../lib/colors"
import { sizes } from "../lib/layout"

import PicPrice from "../images/pic_price.png"

const ProfessionalContainer = styled.section`
  background-color: ${Ghost};
  border-radius: 8px;

  @media (max-width: ${sizes.modifiedTablet}) {
    flex-direction: column;
  }
`

const ProfessionalTextSection = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 60px 0;
  text-align: center;
  @media (max-width: ${sizes.modifiedTablet}) {
    order: 2;
    width: 90%;
    text-align: center;
  }
`

const ProfessionalTitle = styled(Header5)`
  margin-bottom: 24px;
`

const ProfessionalLead = styled(Lead)`
  padding: 0 9%;
`

const ProfessionalImage = styled.img`
  width: 60%;
  max-height: 500px;
  margin: -30px;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin-top: 80px;
    width: 85%;
  }
`

// What do I call this thing?
const ProfessionalBanner = () => {
  return (
    <ProfessionalContainer>
      <ProfessionalTextSection>
        <ProfessionalTitle color={Flour}>
          Start testing infusions with tCheck for $229.99
        </ProfessionalTitle>
        <ProfessionalLead color={Flour}>
          Test infusions, flower, and concentrates for $359.99.
        </ProfessionalLead>
      </ProfessionalTextSection>
      <ProfessionalImage src={PicPrice} />
    </ProfessionalContainer>
  )
}

export default ProfessionalBanner
