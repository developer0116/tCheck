import React from "react"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"

const DetailsText = styled(Body)`
  max-width: 46rem;
  margin: 1rem auto 0;
`

const DetailsTextFeatures = styled(Body)`
  margin: 2rem 0 0 0;
`

const DetailsUL = styled.ul`
  margin: 0;
  padding-inline-start: 20px;
`

const ProductDetailsFeatures = ({ obj }) => {
  const { paragraphsArray, listItemsArray } = obj

  return (
    <>
      {paragraphsArray.map((string, index) => {
        return (
          <DetailsText key={index} secondary>
            {string}
          </DetailsText>
        )
      })}
      <DetailsTextFeatures secondary>Features:</DetailsTextFeatures>
      <DetailsUL>
        {listItemsArray.map((listItem, index) => {
          return <li key={index}>{listItem}</li>
        })}
      </DetailsUL>
    </>
  )
}

export default ProductDetailsFeatures
