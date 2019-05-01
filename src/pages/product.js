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
  // to select between
  // 1. tCheck and Kit
  // 2. tCheck
  // 3. Kit
  const [productNum, setProductNum] = useState(1)

  // options are
  // black, green, blue, white
  const [productColor, changeColor] = useState("black")

  // detail would be a string of
  // features, included, shipping, or specs
  const [detail, setDetail] = useState("features")

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ProductSelection
        productNum={productNum}
        setProductNum={setProductNum}
        productColor={productColor}
        changeColor={changeColor}
        setDetail={setDetail}
      />
      <ProductDetails
        productNum={productNum}
        setDetail={setDetail}
        detail={detail}
      />
      <ProductFAQ />

      <PaddingContainer />
    </Layout>
  )
}

export default ProductPage
