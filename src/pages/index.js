import React from "react"
import styled from "styled-components"
///import ReactGA from "react-ga"

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
import PortableLivePotencyTesting from "../components/PortableLivePotencyTesting"

import { sizes } from "../lib/layout"

///ReactGA.initialize('UA-71026544-1');
///ReactGA.pageview('/');

const PaddingContainer = styled.div`
  padding: 0 80px;

  @media (max-width: ${sizes.modifiedTablet}) {
    padding: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="“tCheck potency tester for THC or CBD in infusions and THCa in flower"
      keywords={[
        `potency tester`,
        `cannabis potency testing`,
        `THC tester`,
        `edibles strong`,
        `tcheck reviews`,
        `cbd tester`,
        `microdosing`,
        `edibles recipes`,
        `cannabutter`,
        `marijuana`,
      ]}
      scripts={[
        '<script> </script>'
      ]}
    />



    <Hero />
    <PaddingContainer>
      <PortableLivePotencyTesting/>
      <ProductRowA />
      <ProductRowB />
      <ValuePropsRow />
      <BuyCTA />
      <AllCannabisProf />
      <AppCTA />
      <AsSeenIn />
    </PaddingContainer>
  </Layout>
)

export default IndexPage
