import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import CustomerSegmentHero from "../components/CustomerSegmentHero"
import CustomerSegmentValueProps from "../components/CustomerSegmentValueProps"
import CustomerSegmentCarousel from "../components/CustomerSegmentCarousel"
import CustomerSegmentCenterTestingBlurb from "../components/CustomerSegmentCenterTestingBlurb"
import CustomerSegmentQuestion1 from "../components/CustomerSegmentQuestion1"
import CustomerSegmentApp from "../components/CustomerSegmentApp"

import { Ghost } from "../lib/colors"

import ProcessorsHero from "../images/hero_processor.png"
import ValueProp1 from "../images/processors_maxpotency.svg"
import ValueProp2 from "../images/processors_controlyield.svg"
import ValueProp3 from "../images/processors_cannaloss.svg"
import ProcessorsBackgroundApp from "../images/processorsApp.jpg"
import ProcessorsApp from "../images/app_proc.svg"
import Case1 from "../images/case_janet.jpg"
import Case2 from "../images/case_thera.jpg"
import Question1 from "../images/HowtoTest_p.svg"

import { sizes } from "../lib/layout"

const list = [
  "50-80ML of concentrate",
  "tCheck",
  "Expansion Kit",
  "6 minutes of your time",
]

const arrayOfImages = [Case1, Case2]

const arrayOfQuotes = [
  {
    quote: "I needed to make sure my team is producing in a consistent manner.",
    background:
      "Janet runs a rosin startup out of Ventura, CA. Yield and quality are her top priorities, and she was struggling with ensuring that each of her production associates was meeting her expectations. Janet needed a way to track her manufacturing processes and quickly test her team's output. She started using tCheck to measure both her incoming material and her final product. Using this data, she could measure consistency from her staff and refine her training techniques.",
  },
  {
    quote:
      "We bought our tCheck so we are able to test our flowers and products at home",
    background:
      "Brandon is the owner of Therapeutic Concepts, a small family owned medical marijuana farm in Oregon. He grows and sells high-quality products on a small scale. He was gifted a tCheck device by his wife and has found it a useful and cost-effective device for testing the potency of his products. He uses his tCheck as an alternative to lab testing wherever possible, due to its low cost and the small sample you need to test your flowers.",
  },
]

const PaddingContainer = styled.div`
  padding: 0 80px;

  @media (max-width: ${sizes.modifiedTablet}) {
    padding: 0;
  }
`

const GhostBackground = styled.div`
  background-color: ${Ghost};
`

const Processors = props => {
  const {
    location: { pathname },
  } = props

  return (
    <>
      <SEO title="Processors" keywords={[`tCheck`, `cannabis`, `infusion`]} />
      <CustomerSegmentHero
        heroImgURL={ProcessorsHero}
        heroHeader={"Concentrate potency is super critical"}
        heroLead={
          "Cannabis concentrates are only getting better, test your yield for extraction efficiency."
        }
      />
      <GhostBackground>
        <CustomerSegmentValueProps
          valueProp1Img={ValueProp1}
          valueProp1Text={"Find max potency"}
          valueProp2Img={ValueProp2}
          valueProp2Text={"Better control yield and efficiency"}
          valueProp3Img={ValueProp3}
          valueProp3Text={"Identify areas of cannabinoid loss"}
        />
        <CustomerSegmentCarousel
          arrayOfImages={arrayOfImages}
          arrayOfQuotes={arrayOfQuotes}
        />
      </GhostBackground>
      <PaddingContainer>
        <CustomerSegmentCenterTestingBlurb
          header={"Dial in your controls and increase your efficiency"}
          body={
            "With so many variables for making concentrates, being able to determine what you're doing right and what might need some tweaking, can be invaluable. tCheck offers insight into what changes increase your yield and what increases your efficiency. Perfecting your process means less time and energy spent towards making a better product. Making a better product means everything at the end of the day. "
          }
        />
        <CustomerSegmentQuestion1
          header={"How do I test the potency?"}
          paragraph1={
            "From closed-loop to rosin press, all you need to test any concentrate is provided in our expansion kit, to go along with your tCheck. Heres what you need: "
          }
          img={Question1}
          list={list}
          paragraph2={
            "tCheck, along with the Expansion Kit gives you everything you need to do 9 concentrate tests. Need to test more? Just order another bottle of reagent."
          }
        />
        <CustomerSegmentApp
          background={ProcessorsBackgroundApp}
          header={"We make testing concentrates easy"}
          body={
            "When you log in to the free tCheck app, you can see all your past test results in the user log. You can add notes about that test, such as what strain it is, or the nutrients for that grow. You can track the progress of how green your thumb is with real, live potency testing- in the palm of your hands."
          }
          app={ProcessorsApp}
        />
      </PaddingContainer>
    </>
  )
}

export default Processors
