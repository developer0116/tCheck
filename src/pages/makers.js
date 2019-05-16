import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import CustomerSegmentHero from "../components/CustomerSegmentHero"
import CustomerSegmentValueProps from "../components/CustomerSegmentValueProps"
import CustomerSegmentCarousel from "../components/CustomerSegmentCarousel"
import CustomerSegmentCenterTestingBlurb from "../components/CustomerSegmentCenterTestingBlurb"
import CustomerSegmentQuestion1 from "../components/CustomerSegmentQuestion1"
import CustomerSegmentApp from "../components/CustomerSegmentApp"

import { Ghost } from "../lib/colors"

import MakersHero from "../images/hero_edible.png"
import ValueProp1 from "../images/edible_cancompliant.svg"
import ValueProp2 from "../images/edible_productline.svg"
import ValueProp3 from "../images/edible_newrecipes.svg"
import EdiblesBackgroundApp from "../images/ediblesApp.jpg"
import EdiblesApp from "../images/app_edbl.svg"
import Case1 from "../images/case_droils.jpg"
import Case2 from "../images/case_steph.jpg"

import { sizes } from "../lib/layout"

const list = [
  "3-5 drops of your infusion",
  "tCheck 2",
  "2 minutes of your time",
]

const arrayOfImages = [Case1, Case2]

const PaddingContainer = styled.div`
  padding: 0 80px;

  @media (max-width: ${sizes.modifiedTablet}) {
    padding: 0;
  }
`

const GhostBackground = styled.div`
  background-color: ${Ghost};
`

const Makers = props => {
  const {
    location: { pathname },
  } = props

  return (
    <Layout pathName={pathname}>
      <SEO
        title="Edible Makers"
        keywords={[`tCheck`, `cannabis`, `infusion`]}
      />
      <CustomerSegmentHero
        heroImgURL={MakersHero}
        heroHeader={"Accurate dosing is a recipe for success"}
        heroLead={
          "Better butter, or coconut oil, olive oil, or alcohol tinctures. The choice is yours with tCheck in hand."
        }
      />
      <GhostBackground>
        <CustomerSegmentValueProps
          valueProp1Img={ValueProp1}
          valueProp1Text={"Be Cannabis-compliant"}
          valueProp2Img={ValueProp2}
          valueProp2Text={"Expand product line"}
          valueProp3Img={ValueProp3}
          valueProp3Text={"Develop new recipes"}
        />
        <CustomerSegmentCarousel />
      </GhostBackground>
      <PaddingContainer>
        <CustomerSegmentCenterTestingBlurb
          header={
            "Test every batch of canna oil in any kitchen you are working in."
          }
          body={
            "tCheck is small enough to fit in your pocket, so taking it to any venue you are working at is super simple. Our reusable tray means that you can test your infused butter, coconut oil, olive oil, or even alcohol tinctures one right after another without anything more than cleaning off the tray. Personalized, and perfectly dosed recipes are in the palm of your hand."
          }
        />
        <CustomerSegmentQuestion1
          header={"How do I test the potency?"}
          paragraph1={
            "Once you have infused your base oil, butter, or alcohol, testing the potency is simple enough for anyone. Here's all you need: "
          }
          list={list}
          paragraph2={
            "tCheck, along with the Expansion Kit gives you everything you need to do 9 flower tests. Need to test more? Just order another bottle of reagent."
          }
        />
        <CustomerSegmentApp
          background={EdiblesBackgroundApp}
          header={"Make any oil work for any recipe"}
          body={
            "Our built-in calculator allows you to customize your infused oil, butter, or alcohol tincture to any recipe. Just input the required material into the calculator and it will tell you exactly how much of your infusion to add to your recipe to get to that perfect desired dose."
          }
          app={EdiblesApp}
        />
      </PaddingContainer>
    </Layout>
  )
}

export default Makers
