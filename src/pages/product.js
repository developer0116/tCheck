import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import ProductSelection from "../components/ProductSelection"
import ProductDetails from "../components/ProductDetails"
import ProductFAQ from "../components/ProductFAQ"

import { sizes } from "../lib/layout"

const PaddingContainer = styled.div`
  padding: 0 80px;

  @media (max-width: ${sizes.modifiedTablet}) {
    padding: 0;
  }
`

const ProductPage = () => {
  // initial state is "kit"
  // to toggle between "kit" and "tCheck"
  const [product, toggleProduct] = useState("kit")

  // options are
  // black, green, blue, white
  const [color, colorSelect] = useState("green")

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ProductSelection
        product={product}
        toggleProduct={toggleProduct}
        color={color}
        colorSelect={colorSelect}
      />
      <ProductDetails product={product} />
      <ProductFAQ />

      <PaddingContainer />
    </Layout>
  )
}

export default ProductPage
