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
  padding: 0 4rem 4rem;
  display: flex;
  height: 600px;
  border: 1px solid blue;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    margin: 0;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    flex-direction: column-reverse;
    text-align: center;
    margin: 0 auto;
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
  border: 1px solid red;

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    height: calc(100vw * 0.55);
    top: unset;
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

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    width: calc(100vw * 0.55);
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

const Quote = styled(Header5)``

const DescriptionBody = styled(Body)``

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

  const carouselText = arrayOfQuotes => {
    return arrayOfQuotes.map((textObj, index) => {
      return (
        <AnimationContainerForText key={index}>
          <Quote>{`"${textObj.quote}"`}</Quote>
          <DescriptionBody secondary>{textObj.background}</DescriptionBody>
        </AnimationContainerForText>
      )
    })
  }

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
  // const arrayOfText = [
  //   <AnimationContainerForText>
  //     <Quote>“I can check if its worth processing the trim”</Quote>
  //     <DescriptionBody secondary>
  //       Marc is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
  //       ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
  //       sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  //       mollit anim id est laborum.
  //     </DescriptionBody>
  //   </AnimationContainerForText>,
  //   <AnimationContainerForText>
  //     <Quote>
  //       “We bought tCheck so we are able to test our flowers and products at
  //       home”
  //     </Quote>
  //     <DescriptionBody secondary>
  //       Brandon is the owner of Therapeutic Concepts, a small family owned
  //       medical marijuana farm in Oregon. He grows and sells high-quality
  //       products on a small scale. He was gifted a tCheck device by his wife and
  //       has found it a useful and cost-effective device for testing the potency
  //       of his products. He uses his tCheck as an alternative to lab testing
  //       wherever possible, due to its low cost and the small sample you need to
  //       test your flowers.
  //     </DescriptionBody>
  //   </AnimationContainerForText>,
  // ]

  arrayOfImageComponents.move(photoNum, 0)
  // arrayOfText.move(photoNum, 0)

  // arrayOfImageComponents.move(photoNum, 0)

  return (
    <CarouselContainer>
      <TextContainer>
        <TransitionGroup className="generic">
          {carouselText(arrayOfQuotes)[photoNum]}
        </TransitionGroup>
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
