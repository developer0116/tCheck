import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import ProductSelection from "../components/ProductSelection"
import ProductDetails from "../components/ProductDetails"
import ProductFAQ from "../components/ProductFAQ"
import ProductFeatureRundown from "../components/ProductFeatureRundown"

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

  // tracks the quantity a user wants to purchase
  const [quantity, setQuantity] = useState(1)

  const [isMobile, setIsMobile] = useState(window.innerWidth < 425)

  const checkResize = () => {
    // 425 === sizes.mobileL
    setIsMobile(window.innerWidth < 425)
  }

  // for conditional rendering
  useEffect(() => {
    window.addEventListener("resize", checkResize)
    return () => {
      window.removeEventListener("resize", checkResize)
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ProductSelection
        productNum={productNum}
        setProductNum={setProductNum}
        productColor={productColor}
        changeColor={changeColor}
        setDetail={setDetail}
        quantity={quantity}
        setQuantity={setQuantity}
        isMobile={isMobile}
      />
      <ProductDetails
        productNum={productNum}
        setDetail={setDetail}
        detail={detail}
      />
      <ProductFAQ />
      <ProductFeatureRundown />

      <PaddingContainer />
    </Layout>
  )
}

export default ProductPage
