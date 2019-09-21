import React from "react"
import styled from "styled-components"


import { Flour } from "../lib/colors"
import { sizes } from "../lib/layout"


const Spacer = styled.div`
  background-color: ${Flour};
  margin: 0 -80px;
  padding: 1.5rem;

  @media (max-width: ${sizes.modifiedTablet}) and (min-width: ${sizes.mobileL}) {
    margin: 0;
    padding: 1.5rem;
  }

  @media (max-width: ${sizes.mobileL}) and (min-width: ${sizes.mobileS}) {
    margin: 0;
  }
`



const Block = () => {
  return (
    <Spacer>
    
      
    </Spacer>
  )
}

export default Block
