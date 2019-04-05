import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import ValuePropsRow from "../components/ValuePropsRow"
import ProductRowA from "../components/ProductRowA"
import ProductRowB from "../components/ProductRowB"
import BuyCTA from "../components/BuyCTA"
import ProfessionalBanner from "../components/ProfessionalBanner"
import AsSeenIn from "../components/AsSeenIn"

const PaddingContainer = styled.div`
  padding: 0 80px;
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
      <AsSeenIn />
    </PaddingContainer>
  </Layout>
)

export default IndexPage
