import React from "react"
import styled from "styled-components"

import Header from "./Header"
import SubHeader from "./SubHeader"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyles"

import { maxWidth } from "../lib/layout"

const CenterContainer = styled.div`
  margin: 0 auto;
  padding-top: 11rem;
  max-width: ${maxWidth}px;
`

const BlogLayout = ({ pathName, children }) => {
  return (
    <>
      <GlobalStyle />
      <Header pathName={pathName} />
      <SubHeader pathName={pathName} />
      <CenterContainer>
        <main>{children}</main>
        <Footer />
      </CenterContainer>
    </>
  )
}

export default BlogLayout
