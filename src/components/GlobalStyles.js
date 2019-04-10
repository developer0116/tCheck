import { createGlobalStyle } from "styled-components"

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
`

export default GlobalStyle
