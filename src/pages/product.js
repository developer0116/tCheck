import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"

import ProductSelection from "../components/ProductSelection"
import ProductDetails from "../components/ProductDetails"
import ProductFAQ from "../components/ProductFAQ"
import ProductFeatureRundown from "../components/ProductFeatureRundown"
import ProductConsumer from "../components/Context"

import { sizes } from "../lib/layout"

const PaddingContainer = styled.div`
  padding: 0 80px;

  @media (max-width: ${sizes.modifiedTablet}) {
    padding: 0;
  }
`

class ProductPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // to select between
      // 1. tCheck and Kit
      // 2. tCheck
      // 3. Kit
      productNum: 1,

      // options are
      // black, green, blue, white
      productColor: "black",

      // detail would be a string of
      // features, included, shipping, or specs
      detail: "features",

      // tracks the quantity a user wants to purchase
      quantity: 1,
      isMobile: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      isMobile: window.innerWidth < 800,
    })
    window.addEventListener("resize", this.checkResize)
  }

  setProductNum = num => {
    this.setState({
      productNum: num,
    })
  }

  changeColor = color => {
    this.setState({
      productColor: color,
    })
  }

  setDetail = detail => {
    this.setState({
      detail,
    })
  }

  setQuantity = quantity => {
    this.setState({
      quantity,
    })
  }

  checkResize = () => {
    // 800 === sizes.modifiedTablet
    this.setState({
      isMobile: window.innerWidth < 800,
    })
  }

  render = () => {
    const { productNum, productColor, detail, quantity, isMobile } = this.state

    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ProductConsumer>
          {({ allProducts }) => {
            /* allProducts is an array of 5  "Graph Modules"
             * -- allProducts[0] contains an array of 8 variants
             * -- -- variants[0] through [3] are just the device as a different color (black, white, blue, green),
             * -- -- variants[4] through [7] are the device + the kit with the same color schemes
             * -- allProducts[1] is just the kit
             */
            return (
              <ProductSelection
                productNum={productNum}
                setProductNum={this.setProductNum}
                productColor={productColor}
                changeColor={this.changeColor}
                setDetail={this.setDetail}
                quantity={quantity}
                setQuantity={this.setQuantity}
                isMobile={isMobile}
              />
            )
          }}
        </ProductConsumer>
        <ProductDetails
          productNum={productNum}
          setDetail={this.setDetail}
          detail={detail}
        />
        <ProductFAQ />
        <ProductFeatureRundown />

        <PaddingContainer />
      </>
    )
  }
}

export default ProductPage
