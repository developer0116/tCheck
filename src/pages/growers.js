import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

const PaddingContainer = styled.div`
  padding: 0 80px;
`

const Growers = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <PaddingContainer>Growers Page!</PaddingContainer>
  </Layout>
)

export default Growers
