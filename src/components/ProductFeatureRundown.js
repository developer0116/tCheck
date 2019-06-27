import React from "react"
import styled from "styled-components"

import { Body, Header5 } from "./Typography"

import { Dada } from "../lib/colors"
import { sizes } from "../lib/layout"

import CheckMark from "../images/greenCheckMark.svg"

const Container = styled.section`
  margin: 3.5rem auto;
  width: 100%;
  max-width: 50rem;
`

const Header = styled(Header5)`
  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileS}) {
    text-align: center;
  }
`

// Apparantly, setting a border on a tr requires this
// https://stackoverflow.com/questions/20872200/giving-a-border-to-an-html-table-row-tr
const TableContainer = styled.table`
  margin: 2rem 0;
  width: 100%;
  border-collapse: collapse;
`

const TableRow = styled.tr`
  border-bottom: 1px solid ${Dada};
`

const TableData = styled.td`
  text-align: center;
`

const ColumnTitle = styled(Body)`
  text-align: center;
  padding: 1rem;
`

const FeatureItemTitle = styled(Body)`
  text-align: left;
  padding: 1rem;
`

const RowText = styled(Body)`
  padding: 1rem;

  text-align: center;
`

const GreenCheckMark = styled.img`
  height: 1rem;
  width: 1rem;
  margin: 0 auto;
`

const ProductFeatureRundown = React.memo(() => {
  return (
    <Container>
      <Header>Feature Rundown</Header>
      <TableContainer>
        <tbody>
          <TableRow>
            <th />
            <TableData>
              <ColumnTitle>tCheck 2 Device</ColumnTitle>
            </TableData>
            <TableData>
              <ColumnTitle>Expansion Kit</ColumnTitle>
            </TableData>
          </TableRow>
          <TableRow>
            <th />
            <TableData />
            <TableData>
              <RowText secondary>Requires tCheck 2 device</RowText>
            </TableData>
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>Price Base</FeatureItemTitle>
            </th>
            <TableData>
              <RowText secondary>$279.99</RowText>
            </TableData>
            <TableData>
              <RowText secondary>$199.99</RowText>
            </TableData>
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>CBV measurement</FeatureItemTitle>
            </th>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>Coconut oil</FeatureItemTitle>
            </th>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
            <TableData />
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>Butter</FeatureItemTitle>
            </th>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
            <TableData />
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>Olive Oil</FeatureItemTitle>
            </th>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
            <TableData />
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>Alcohol</FeatureItemTitle>
            </th>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
            <TableData />
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>iOS & Android app</FeatureItemTitle>
            </th>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>History Log</FeatureItemTitle>
            </th>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>Plant Material</FeatureItemTitle>
            </th>
            <TableData />
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>Concentrates</FeatureItemTitle>
            </th>
            <TableData />
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
          </TableRow>
          <TableRow>
            <th>
              <FeatureItemTitle secondary>6 month warranty</FeatureItemTitle>
            </th>
            <TableData>
              <GreenCheckMark src={CheckMark} />
            </TableData>
            <TableData />
          </TableRow>
        </tbody>
      </TableContainer>
    </Container>
  )
})

export default ProductFeatureRundown
