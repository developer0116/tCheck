import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { Fade, Ghost } from "../lib/colors"
import { sizes } from "../lib/layout"

import CheckMark from "../images/greenCheckMark.svg"

const RundownContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(14, 1fr);
  grid-auto-flow: column;
  align-items: center;
  margin: 2rem auto 0;
  max-width: 45rem;
`

const ColumnTitle = styled(Body)`
  text-align: center;
`

const FeatureItemTitle = styled(Body)`
  margin: 0 0 0 1rem;
`

const RowText = styled(Body)`
  text-align: center;
`

const GreenCheckMark = styled.img`
  margin: 0 auto;
`

const ProductFeatureRundown = React.memo(() => {
  return (
    <RundownContainer>
      <Header5>Feature Rundown</Header5>
      <span />
      <span />
      <FeatureItemTitle secondary>Price Base</FeatureItemTitle>
      <FeatureItemTitle secondary>CBV measurement</FeatureItemTitle>
      <FeatureItemTitle secondary>Coconut oil</FeatureItemTitle>
      <FeatureItemTitle secondary>Butter</FeatureItemTitle>
      <FeatureItemTitle secondary>Olive Oil</FeatureItemTitle>
      <FeatureItemTitle secondary>Alcohol</FeatureItemTitle>
      <FeatureItemTitle secondary>iOS & Android app</FeatureItemTitle>
      <FeatureItemTitle secondary>History Log</FeatureItemTitle>
      <FeatureItemTitle secondary>Plant material</FeatureItemTitle>
      <FeatureItemTitle secondary>Concentrates</FeatureItemTitle>
      <FeatureItemTitle secondary>6 month warranty</FeatureItemTitle>
      <span />
      <ColumnTitle>tCheck 2 Device</ColumnTitle>
      <span />
      <RowText secondary>$279.99</RowText>
      <GreenCheckMark src={CheckMark} />
      <GreenCheckMark src={CheckMark} />
      <GreenCheckMark src={CheckMark} />
      <GreenCheckMark src={CheckMark} />
      <GreenCheckMark src={CheckMark} />
      <GreenCheckMark src={CheckMark} />
      <GreenCheckMark src={CheckMark} />
      <span />
      <span />
      <GreenCheckMark src={CheckMark} />
      <span />
      <ColumnTitle>Expansion Kit</ColumnTitle>
      <RowText secondary>Requires tCheck 2 device</RowText>
      <span />
      <RowText secondary>$199.99</RowText>
      <GreenCheckMark src={CheckMark} />
      <span />
      <span />
      <span />
      <span />
      <GreenCheckMark src={CheckMark} />
      <GreenCheckMark src={CheckMark} />
      <GreenCheckMark src={CheckMark} />
      <GreenCheckMark src={CheckMark} />
      <span />
    </RundownContainer>
  )
})

export default ProductFeatureRundown
