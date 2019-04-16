import React from "react"
import styled from "styled-components"

import { Body, Lead, Header5 } from "./Typography"

import { tGreen, Fade, Dada } from "../lib/colors"
import { sizes } from "../lib/layout"

const ProductSelectionContainer = styled.section``

const ProductSelectionHeader = styled(Header5)``

const ProductSelectionSubHeader = styled(Lead)``

const ProductSelectionToggle = styled.div`
  border: 1px solid ${Dada};
  border-radius: 8px;
`

const ProductSelection = ({ product, toggleProduct }) => {
  const headerText = product === "kit" ? "tCheck 2 & Expansion Kit" : "tCheck 2"
  return (
    <ProductSelectionContainer>
      <ProductSelectionHeader>{headerText}</ProductSelectionHeader>
      <ProductSelectionSubHeader color={Fade}>
        Cannabis Infusion Tester
      </ProductSelectionSubHeader>
      <ProductSelectionToggle>
        <div>tCheck 2 & Expansion Kit</div>
        <div>tCheck 2</div>
      </ProductSelectionToggle>
    </ProductSelectionContainer>
  )
}

export default ProductSelection
