import React from "react"
import PropTypes from "prop-types"

import Client from "shopify-buy"

// here, we start setting up context as a global for
// product information
// followed this pretty closely
// https://www.gatsbyjs.org/packages/gatsby-plugin-layout/

const defaultContextValue = {
  allProducts: {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class ContextProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...defaultContextValue,
    }
  }

  componentDidMount() {
    // Sets up shopfiy client
    const client = Client.buildClient({
      storefrontAccessToken: "e6cc5db98b21bd12b4657197f2014038",
      domain: "tcheck-me.myshopify.com",
      appId: "6",
    })

    let allProducts

    // fetches all products from shopify store
    client.product.fetchAll().then(products => {
      this.setState({
        allProducts: products,
      })
    })

    // checks if existing "checkout" exsists,
    // if so, fetches those items to show later on the product page
    // else creates a new checkout and stores the id in locale storage
    if (localStorage.getItem("lastCheckoutId")) {
      client.checkout
        .fetch(localStorage.getItem("lastCheckoutId"))
        .then(checkout => {})
    } else {
      client.checkout.create().then(checkout => {
        localStorage.setItem("lastCheckoutId", checkout.id)
      })
    }
  }

  render() {
    const { children } = this.props

    return <Provider value={this.state}>{children}</Provider>
  }
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Consumer as default, ContextProvider }
