import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import ProductSelection from "../components/ProductSelection"

import { sizes } from "../lib/layout"

const PaddingContainer = styled.div`
  padding: 0 80px;

  @media (max-width: ${sizes.modifiedTablet}) {
    padding: 0;
  }
`

const ProductPage = () => {
  const [product, toggleProduct] = useState("kit")

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <PaddingContainer>
        <ProductSelection product={product} toggleProduct={toggleProduct}>
          <div />
        </ProductSelection>
      </PaddingContainer>
    </Layout>
  )
}

export default ProductPage
