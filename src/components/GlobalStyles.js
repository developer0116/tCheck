import { createGlobalStyle } from "styled-components"
import { tGreen, Fade } from "../lib/colors"

const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
	}

	html, body {
    font-family: Arial Rounded MT Bold, Lato;
    font-size: 16px;
    
    margin: 0px;
    padding: 0px;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin: 0;
	}

	textarea, select, input, button { 
		outline: none;
  }

  .carousel {
    border-radius: 8px;
  }
  
  .carousel .control-dots {
    text-align: left !important;
  }

  .carousel .control-dots .dot.selected {
    width: 1rem !important;
    height: 1rem !important;
    background: ${tGreen} !important;
    border: none !important;

    &:hover {
      opacity: 1 !important;
    }
  }

  .carousel .control-dots .dot {
    width: 1rem !important;
    height: 1rem !important;
    border: solid 1px ${Fade} !important;

    &:hover {
      opacity: 0.3 !important;
    }
  }
`

export default GlobalStyle
