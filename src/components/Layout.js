import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyles"
import { ContextProvider } from "./Context"

import { maxWidth } from "../lib/layout"

const CenterContainer = styled.div`
  margin: 0 auto;
  padding-top: 5.5rem;
  max-width: ${maxWidth}px;
`

const Layout = props => {
  const {
    location: { pathname },
    children,
  } = props

  const isProductPage = pathname === "/product"

  return (
    <ContextProvider>
      <GlobalStyle />
      <Header isProductPage={isProductPage} pathName={pathname} />
      <CenterContainer>
        <main>{children}</main>
        <Footer />
      </CenterContainer>
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
