import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import ValuePropsRow from "../components/ValuePropsRow"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <ValuePropsRow />
  </Layout>
)

export default IndexPage
