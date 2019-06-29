import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyles"

import { maxWidth } from "../lib/layout"

const CenterContainer = styled.div`
  margin: 0 auto;
  padding-top: 5.5rem;
  max-width: ${maxWidth}px;
`

const Layout = ({ pathName, children }) => {
  return (
    <>
      <GlobalStyle />
      <Header pathName={pathName} />
      <CenterContainer>
        <main>{children}</main>
        <Footer />
      </CenterContainer>
    </>
  )
}

export default Layout
