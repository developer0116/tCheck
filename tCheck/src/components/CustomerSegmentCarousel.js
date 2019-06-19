import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Flipper, Flipped } from "react-flip-toolkit"
import { TransitionGroup } from "react-transition-group"
import "array.prototype.move"

import { Header5, Body } from "./Typography"

import { Ghost, Fade } from "../lib/colors"
import { sizes } from "../lib/layout"

const CarouselContainer = styled.section`
  background-color: ${Ghost};
  padding: 0 4rem 4rem 1rem;
  display: flex;
  height: 600px;
  justify-content: space-around;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    margin: 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column-reverse;
    text-align: center;
    margin: 0 auto 8rem;
    padding: 0 1rem;
  }
`

const TextContainer = styled.div`
  flex-basis: 40%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const KeyFrame = keyframes`
  from {
    transform: translateX(-20px)
    opacity: 0;
  } 
  to {
    transform: translateX(0px)
    opacity: 1;
  }
`

const AnimationContainerForText = styled.div`
  animation: ${KeyFrame};
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`

const ImagesContainer = styled.div`
  flex-basis: 40%;
  position: relative;
  height: 100%;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    height: calc(100vw * 0.65);
    top: unset;
    display: table;
    margin: 3rem 0;
  }
`

const Image = styled.img`
  top: 13%;
  bottom: 0;
  left: 0;
  right: 120px;
  position: absolute;
  z-index: 3;
  max-width: 400px;
  max-height: 400px;
  width: calc(100vw * 0.4);

  &:nth-of-type(2) {
    transform: translate(67px) scale(0.94);
    z-index: 2;
  }

  transition-duration: 500ms;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileS}) {
    left: 5%;
    font-size: 1.5rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: calc(100vw * 0.65);
    top: unset;
  }
`

// &:nth-of-type(3) {
//   transform: translate(120px) scale(0.9);
//   z-index: 1;
// }

const DotList = styled.ul`
  bottom: 0;
  margin: 10px 0;
  padding-inline-start: 0;
  width: 100%;

  li + li {
    margin: 0 8px;
  }
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

  ${({ clicked }) => {
    return clicked
      ? `background: #00b398;
    border: none;`
      : null
  }}
    
  }
`
// opacity: 0.3;
//   box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);

const Quote = styled(Header5)`
  margin-bottom: 2rem;

  @media (max-width: ${sizes.laptopL}) and (min-width: ${sizes.laptop}) {
  }

  @media (max-width: ${sizes.laptop}) and (min-width: ${sizes.modifiedTablet}) {
  }

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileS}) {
    font-size: 1.5rem;
  }
`

const DescriptionBody = styled(Body)`
  margin-bottom: 2rem;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileS}) {
    font-size: 1rem;
  }
`

const CustomerSegmentCarousel = props => {
  const { arrayOfImages, arrayOfQuotes } = props

  // someone.... anyone...
  // find a better way of doing this, please
  const [photoNum, changePhotoNum] = useState(0)

  const arrayOfImageComponents = arrayOfImages.map((img, index) => {
    return (
      <Flipped flipId={`flip-${index}`}>
        <Image photoNum={photoNum} src={img} />
      </Flipped>
    )
  })

  const carouselText = (
    <AnimationContainerForText>
      <Quote>{`"${arrayOfQuotes[photoNum].quote}"`}</Quote>
      <DescriptionBody secondary>
        {arrayOfQuotes[photoNum].background}
      </DescriptionBody>
    </AnimationContainerForText>
  )

  const arrayOfDots = []

  for (let i = 0; i < arrayOfQuotes.length; i++) {
    arrayOfDots.push(
      <Dot
        onClick={() => {
          changePhotoNum(i)
        }}
        clicked={photoNum === i ? true : false}
      />
    )
  }

  arrayOfImageComponents.move(photoNum, 0)

  return (
    <CarouselContainer>
      <TextContainer>
        <TransitionGroup className="generic">{carouselText}</TransitionGroup>
        <DotList>{arrayOfDots}</DotList>
      </TextContainer>
      <ImagesContainer>
        <Flipper applyTransformOrigin={false} flipKey={photoNum}>
          {arrayOfImageComponents}
          {/* <Image photoNum={photoNum} color={"red"} />
            <Image photoNum={photoNum} color={"green"} />
            <Image color={"blue"} /> */}
        </Flipper>
      </ImagesContainer>
    </CarouselContainer>
  )
}

export default CustomerSegmentCarousel
