import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import CustomerSegmentHero from "../components/CustomerSegmentHero"
import CustomerSegmentValueProps from "../components/CustomerSegmentValueProps"
import CustomerSegmentCarousel from "../components/CustomerSegmentCarousel"
import CustomerSegmentCenterTestingBlurb from "../components/CustomerSegmentCenterTestingBlurb"
import CustomerSegmentQuestion1 from "../components/CustomerSegmentQuestion1"
import CustomerSegmentQuestion2 from "../components/CustomerSegmentQuestion2"
import { Body } from "../components/Typography"

import ValueProp1 from "../images/growers_improvestrains.svg"
import ValueProp2 from "../images/growers_abtest.svg"
import ValueProp3 from "../images/growers_harvestpeak.svg"

import { sizes } from "../lib/layout"

const list = [
  "A pea sized nug that is at least 60% dried",
  "tCheck 2",
  "Expansion Kit",
  "5 minutes of your time",
]

const PaddingContainer = styled.div`
  padding: 0 80px;

  @media (max-width: ${sizes.modifiedTablet}) {
    padding: 0;
  }
`

const CustomerSegmentBlurb = styled(Body)`
  max-width: 77rem;
  margin-top: 2rem;
  font-size: 1.25rem;
  text-align: center;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    font-size: 1rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    font-size: 1rem;
    width: 90%;
    margin: 2rem auto;
  }
`

const Growers = React.memo(() => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CustomerSegmentHero
      heroHeader={"Harvest the highest potency"}
      heroLead={
        "Whether you are in a grow room or on the field, tCheck gives you more control over your crop. "
      }
    />
    <PaddingContainer>
      <CustomerSegmentValueProps
        valueProp1Img={ValueProp1}
        valueProp1Text={"Improve strains through custom hybrids"}
        valueProp2Img={ValueProp2}
        valueProp2Text={"A/B test crop"}
        valueProp3Img={ValueProp3}
        valueProp3Text={"Harvest at peak potency"}
      />
      <CustomerSegmentCarousel />
      <CustomerSegmentCenterTestingBlurb
        header={"Determine your THCa percentage in a pinch"}
        body={
          "With just a pinch of plant, testing your cannabis on the spot for THCa gives you a leg up over the competition. Your crop may look and smell amazing, but is it sitting at 15.6%, or soaring at 27.3%? State guidelines vary on testing for contaminates like pesticides, or heavy metals but everyone wants the strongest strain to hit that top shelf."
        }
      />
      <CustomerSegmentBlurb secondary>
        We can help you determine which strain has the highest THCa so you can
        choose which plants to pull, and which ones to process into concentrates
        instead.
      </CustomerSegmentBlurb>
      <CustomerSegmentQuestion1
        header={"How do I test the potency?"}
        paragraph1={
          "Whether this is your first crop, or you're a seasoned green thumb, we have designed tCheck to be simple enough for virtually anyone to use. Here’s all you need: "
        }
        list={list}
        paragraph2={
          "tCheck, along with the Expansion Kit gives you everything you need to do 9 flower tests. Need to test more? Just order another bottle of reagent."
        }
      />
      <CustomerSegmentQuestion2
        header={"Track each test right from the tCheck app"}
        body={
          "When you log in to the free tCheck app, you can see all your past test results in the user log. You can add notes about that test, such as what strain it is, or the nutrients for that grow. You can track the progress of how green your thumb is with real, live potency testing- in the palm of your hands."
        }
      />
    </PaddingContainer>
  </Layout>
))

export default Growers
