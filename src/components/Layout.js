/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
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

const Layout = ({ isProductPage = false, pathName, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.title}
          isProductPage={isProductPage}
          pathName={pathName}
        />
        <CenterContainer>
          <main>{children}</main>
          <Footer />
        </CenterContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
