import React from "react"
import styled from "styled-components"

import { Header1 } from "./Typography"

import { Ghost, Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

const CarouselContainer = styled.section`
  background-color: ${Ghost};
  margin: 0 -80px;
  padding: 3rem;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 0;
  }
`

const Header = styled(Header1)`
  text-align: center;
`

const CustomerSegmentCarousel = React.memo(() => {
  return (
    <CarouselContainer>
      <Header>This is where the Carousel Goes!</Header>
    </CarouselContainer>
  )
})

export default CustomerSegmentCarousel
