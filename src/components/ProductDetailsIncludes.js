import React from "react"
import styled from "styled-components"

import { Body, Lead, Header4 } from "./Typography"

const DetailsText = styled(Body)`
  max-width: 46rem;
  margin: 1rem auto 0;
`

const DetailsTextTitle = styled(Body)`
  margin: 2rem 0 0 0;
`

const DetailsUL = styled.ul`
  margin: 0;
  padding-inline-start: 20px;
`

const ProductDetailsInludes = ({ obj }) => {
  const { unorderedListsArray } = obj

  return (
    <>
      {unorderedListsArray.map(({ title, listItems }, index) => {
        return (
          <>
            <DetailsTextTitle secondary>{title}</DetailsTextTitle>
            <DetailsUL>
              {listItems.map((listItem, index) => {
                return <li key={index}>{listItem}</li>
              })}
            </DetailsUL>
          </>
        )
      })}
    </>
  )
}

export default ProductDetailsInludes
