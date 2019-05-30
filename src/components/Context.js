import React from "react"
import PropTypes from "prop-types"

import Client from "shopify-buy"

// here, we start setting up context as a global for
// product information
// followed this pretty closely
// https://www.gatsbyjs.org/packages/gatsby-plugin-layout/

// Sets up shopfiy client
const client = Client.buildClient({
  storefrontAccessToken: "e6cc5db98b21bd12b4657197f2014038",
  domain: "tcheck-me.myshopify.com",
  appId: "6",
})

const { Provider, Consumer } = React.createContext({})

class ContextProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    // fetches all products from shopify store
    client.product.fetchAll().then(products => {
      /* products is an array of 5  "Graph Modules"
       * -- products[0] contains an array of 8 variants
       * -- -- variants[0] through [3] are just the device as different colors (black, white, blue, green),
       * -- -- variants[4] through [7] are the device + the kit with the same color schemes
       * -- products[1] is just the kit
       */

      // create tCheck objects to create productInfo
      const tCheck = {}

      for (let i = 0; i <= 3; i++) {
        // this is very brittle
        switch (i) {
          case 0:
            tCheck.white = {
              title: products[0].variants[i].title,
              price: products[0].variants[i].price,
              sku: products[0].variants[i].sku,
              id: products[0].variants[i].id,
            }
            break
          case 1:
            tCheck.green = {
              title: products[0].variants[i].title,
              price: products[0].variants[i].price,
              sku: products[0].variants[i].sku,
              id: products[0].variants[i].id,
            }
            break
          case 2:
            tCheck.black = {
              title: products[0].variants[i].title,
              price: products[0].variants[i].price,
              sku: products[0].variants[i].sku,
              id: products[0].variants[i].id,
            }
            break
          case 3:
            tCheck.blue = {
              title: products[0].variants[i].title,
              price: products[0].variants[i].price,
              sku: products[0].variants[i].sku,
              id: products[0].variants[i].id,
            }
            break
        }
      }

      const tCheckAndKit = {}

      for (let i = 4; i <= 7; i++) {
        switch (i) {
          case 4:
            tCheckAndKit.white = {
              title: products[0].variants[i].title,
              price: products[0].variants[i].price,
              sku: products[0].variants[i].sku,
              id: products[0].variants[i].id,
            }
            break
          case 5:
            tCheckAndKit.green = {
              title: products[0].variants[i].title,
              price: products[0].variants[i].price,
              sku: products[0].variants[i].sku,
              id: products[0].variants[i].id,
            }
            break
          case 6:
            tCheckAndKit.black = {
              title: products[0].variants[i].title,
              price: products[0].variants[i].price,
              sku: products[0].variants[i].sku,
              id: products[0].variants[i].id,
            }
            break
          case 7:
            tCheckAndKit.blue = {
              title: products[0].variants[i].title,
              price: products[0].variants[i].price,
              sku: products[0].variants[i].sku,
              id: products[0].variants[i].id,
            }
            break
        }
      }

      const kit = {
        title: products[1].variants[0].title,
        price: products[1].variants[0].price,
        sku: products[1].variants[0].sku,
        id: products[1].variants[0].id,
      }

      const productInfo = {
        tCheck,
        tCheckAndKit,
        kit,
      }

      // checks if existing "checkout" exists,
      // if so, fetches those items to show later on the product page
      // else creates a new checkout and stores the id in locale storage and state
      if (localStorage.getItem("lastCheckoutId")) {
        client.checkout
          .fetch(localStorage.getItem("lastCheckoutId"))
          .then(checkout => {
            this.setState({
              checkoutId: checkout.id,
              productInfo,
            })
          })
      } else {
        client.checkout.create().then(checkout => {
          localStorage.setItem("lastCheckoutId", checkout.id)
          this.setState({
            checkoutId: checkout.id,
            productInfo,
          })
        })
      }
    })
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          shopifyClient: client,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Consumer as default, ContextProvider }
