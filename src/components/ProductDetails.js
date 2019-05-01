import React, { useState } from "react"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"
import ProductDetailsFeatures from "./ProductDetailsFeatures"
import ProductDetailsIncludes from "./ProductDetailsIncludes"
import ProductDetailsShipping from "./ProductDetailsShipping"
import ProductDetailsSpecs from "./ProductDetailsSpecs"

import { Fade, Dada, Ink, Ghost } from "../lib/colors"
import { sizes } from "../lib/layout"
import productDetailsContent from "../lib/productDetailsContent"

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
  margin: 2rem auto 3.5rem;
`

const ProductDetails = React.memo(({ productNum, setDetail, detail }) => {
  const obj = productDetailsContent[productNum][detail]

  let detailText

  if (detail === "features") {
    detailText = <ProductDetailsFeatures obj={obj} />
  } else if (detail === "included") {
    detailText = <ProductDetailsIncludes obj={obj} />
  } else if (detail === "shipping") {
    detailText = <ProductDetailsShipping obj={obj} />
  } else if (detail === "specs") {
    detailText = <ProductDetailsSpecs obj={obj} />
  }

  return (
    <DetailsContainer id="details">
      <DetailsTabContainer>
        <DetailsTab
          onClick={() => setDetail("features")}
          tabIndex="0"
          color={detail === "features" ? Ink : Fade}
        >
          Product & Features
        </DetailsTab>
        <DetailsTab
          onClick={() => setDetail("included")}
          tabIndex="0"
          color={detail === "included" ? Ink : Fade}
        >
          What's Included
        </DetailsTab>
        <DetailsTab
          onClick={() => setDetail("shipping")}
          tabIndex="0"
          color={Fade}
          color={detail === "shipping" ? Ink : Fade}
        >
          Shipping
        </DetailsTab>
        <DetailsTab
          onClick={() => setDetail("specs")}
          tabIndex="0"
          color={Fade}
          color={detail === "specs" ? Ink : Fade}
        >
          Specs
        </DetailsTab>
      </DetailsTabContainer>
      <DetailsText secondary>{detailText}</DetailsText>
    </DetailsContainer>
  )
})

export default ProductDetails
