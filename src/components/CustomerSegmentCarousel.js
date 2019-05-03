import React, { useState } from "react"
import styled from "styled-components"

import { Header5, Body } from "./Typography"

import { Ghost, Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

const CarouselContainer = styled.section`
  background-color: ${Ghost};
  border: 1px solid blue;
  padding: 0 4rem 4rem;
  display: flex;
  justify-content: space-between;
  height: calc(100vw * 0.42);
  max-height: 600px;

  @media (max-width: ${sizes.modifiedTablet}) {
    margin: 0;
  }
`

const TextContainer = styled.div`
  border: 1px solid red;
  flex-basis: 40%;
`

const ImagesContainer = styled.div`
  border: 1px solid green;
  flex-basis: 50%;
  position: relative;
`

const Image = styled.div`
  background-color: ${({ color }) => color};
  top: 0;
  bottom: 0;
  left: 0;
  right: 120px;
  position: absolute;
  z-index: 3;

  &:nth-of-type(2) {
    transform: translate(67px) scale(0.94);
    z-index: 2;
  }

  &:nth-of-type(3) {
    transform: translate(120px) scale(0.9);
    z-index: 1;
  }
`

const DotList = styled.ul`
  bottom: 0;
  margin: 10px 0;
  padding-inline-start: 0;
  width: 100%;
`

const Dot = styled.li`
  -webkit-transition: opacity 0.25s ease-in;
  -moz-transition: opacity 0.25s ease-in;
  -ms-transition: opacity 0.25s ease-in;
  -o-transition: opacity 0.25s ease-in;
  transition: opacity 0.25s ease-in;
  border: 1px solid ${Fade};
  background: transparent;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  display: inline-block;
  margin: 0 8px;
`
// opacity: 0.3;
//   box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);

const Quote = styled(Header5)``

const DescriptionBody = styled(Body)``

const CustomerSegmentCarousel = React.memo(() => {
  const [photoNum, changePhotoNum] = useState(1)

  return (
    <CarouselContainer>
      <TextContainer>
        <Quote>“I can check if its worth processing the trim”</Quote>
        <DescriptionBody secondary>
          Marc is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </DescriptionBody>
        <DotList>
          <Dot
            onClick={() => {
              changePhotoNum(1)
            }}
          />
          <Dot
            onClick={() => {
              changePhotoNum(2)
            }}
          />
          <Dot
            onClick={() => {
              changePhotoNum(3)
            }}
          />
        </DotList>
      </TextContainer>
      <ImagesContainer>
        <Image color={"red"} />
        <Image color={"green"} />
        <Image color={"blue"} />
      </ImagesContainer>
    </CarouselContainer>
  )
})

export default CustomerSegmentCarousel
