import React, { useState } from "react"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"

import { Fade, Dada, Ghost } from "../lib/colors"
import { sizes } from "../lib/layout"
import detailsContent from "../lib/detailsContent"

const DetailsContainer = styled.section``

const DetailsTabContainer = styled.div`
  border-bottom: 1px solid ${Dada};
  margin: 2rem auto 0;
  max-width: 63rem;
  display: flex;
  justify-content: center;
`

const DetailsTab = styled(Lead)`
  margin: 1rem auto;
  font-size: 1.25rem;
  cursor: pointer;
`

const DetailsText = styled(Body)`
  max-width: 46rem;
  margin: 2rem auto 0;
`

const ProductDetails = React.memo(({ product }) => {
  // detail would be a string of
  // description, features, included, shipping, or specs
  const [detail, setDetail] = useState("description")

  let detailText = detailsContent[product][detail]

  return (
    <DetailsContainer>
      <DetailsTabContainer>
        <DetailsTab
          onClick={() => setDetail("description")}
          tabIndex="0"
          color={Fade}
        >
          Description
        </DetailsTab>
        <DetailsTab
          onClick={() => setDetail("features")}
          tabIndex="0"
          color={Fade}
        >
          Features
        </DetailsTab>
        <DetailsTab
          onClick={() => setDetail("included")}
          tabIndex="0"
          color={Fade}
        >
          Whats Included
        </DetailsTab>
        <DetailsTab
          onClick={() => setDetail("shipping")}
          tabIndex="0"
          color={Fade}
        >
          Shipping
        </DetailsTab>
        <DetailsTab
          onClick={() => setDetail("specs")}
          tabIndex="0"
          color={Fade}
        >
          Specs
        </DetailsTab>
      </DetailsTabContainer>
      <DetailsText secondary>{detailText}</DetailsText>
    </DetailsContainer>
  )
})

export default ProductDetails