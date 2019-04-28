import React from "react"
import styled from "styled-components"

import { Body } from "./Typography"
import { tBlue } from "../lib/colors"

const DetailsText = styled(Body)`
  max-width: 46rem;
  margin: 1rem auto 0;
`

const InlineLink = styled.a`
  text-decoration: none;
  color: ${tBlue};
`

const ProductDetailsShipping = ({ obj }) => {
  return (
    <>
      {obj.map((string, index) => {
        return (
          <>
            <DetailsText key={index} secondary>
              {string}
            </DetailsText>
          </>
        )
      })}
      <DetailsText secondary>
        <InlineLink
          href="https://medium.com/tcheck/shipping-delivery-faqs-b74d84931e48"
          target="_blank"
        >
          See all shipping FAQs
        </InlineLink>
      </DetailsText>
    </>
  )
}

export default ProductDetailsShipping
