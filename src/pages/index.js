import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import ValuePropsRow from "../components/ValuePropsRow"
import ProductRowA from "../components/ProductRowA"
import ProductRowB from "../components/ProductRowB"
import BuyCTA from "../components/BuyCTA"
import AllCannabisProf from "../components/AllCannabisProf"
import AppCTA from "../components/AppCTA"
import AsSeenIn from "../components/AsSeenIn"

import { sizes } from "../lib/layout"

const PaddingContainer = styled.div`
  padding: 0 80px;

  @media (max-width: ${sizes.modifiedTablet}) {
    padding: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <PaddingContainer>
      <ValuePropsRow />
      <ProductRowA />
      <ProductRowB />
      <BuyCTA />
      <AllCannabisProf />
      <AppCTA />
      <AsSeenIn />
    </PaddingContainer>
  </Layout>
)

export default IndexPage
