import React from "react"
import styled from "styled-components"

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

class ProductPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // to select between
      // 1. tCheck and Kit
      // 2. tCheck
      // 3. Kit
      product: "tCheckAndKit",

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

  setProductName = productName => {
    this.setState({
      product: productName,
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

  createCheckout = () => {
    const {
      state: { productInfo, checkoutId },
      shopifyClient,
    } = this.props

    const { quantity, product, productColor } = this.state

    const lineItemsToAdd = [
      {
        variantId:
          product === "kit"
            ? productInfo[product].id
            : productInfo[product][productColor].id,
        quantity,
      },
    ]

    const lineItemIdsToRemove = [this.state.currentLineItem]

    // First, remove line old line item that may be there, if the user goes back to
    // the product page

    // Second, add a new line item, with the new item they choose

    shopifyClient.checkout
      .removeLineItems(checkoutId, lineItemIdsToRemove)
      .then(checkout => {
        shopifyClient.checkout
          .addLineItems(checkoutId, lineItemsToAdd)
          .then(checkout => {
            this.setState({
              currentLineItem: checkout.lineItems[0].id,
            })

            window.open(checkout.webUrl, "_blank")
          })
      })
  }

  render = () => {
    const { product, productColor, detail, quantity, isMobile } = this.state

    return (
      <>
        <SEO title="Order Page" keywords={[`potency tester`, `cannabis potency testing`, `THC tester`, `tcheck order`, `tcheck reviews`, `cbd tester`, `expansion kit`, `order page`, `shipping`, `marijuana`]} />
        <ProductSelection
          product={product}
          setProductName={this.setProductName}
          productColor={productColor}
          changeColor={this.changeColor}
          setDetail={this.setDetail}
          quantity={quantity}
          setQuantity={this.setQuantity}
          isMobile={isMobile}
          createCheckout={this.createCheckout}
        />
        <ProductDetails
          product={product}
          setDetail={this.setDetail}
          detail={detail}
        />
        <ProductFAQ />
        <ProductFeatureRundown />
      </>
    )
  }
}

export default ProductPage
