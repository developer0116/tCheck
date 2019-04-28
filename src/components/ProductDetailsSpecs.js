import React from "react"
import styled from "styled-components"

import { Body } from "./Typography"

const DetailsTextTitle = styled(Body)`
  margin: 1.5rem auto 0.5rem;
`

const DetailsText = styled(Body)`
  max-width: 46rem;
  margin: 0;
`

const ProductDetailsInludes = ({ obj }) => {
  return (
    <>
      {obj.map(({ title, textArray }, index) => {
        return (
          <>
            <DetailsTextTitle key={index} secondary>
              {title}
            </DetailsTextTitle>
            {textArray.map((listItem, index) => {
              return (
                <DetailsText secondary key={index}>
                  {listItem}
                </DetailsText>
              )
            })}
          </>
        )
      })}
    </>
  )
}

export default ProductDetailsInludes
