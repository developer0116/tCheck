import styled from "styled-components"
import { tGreen } from "../lib/colors"

const StyledLink = styled.a`
  color: ${({ color = tGreen }) => color};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ hoverColor = tGreen }) => hoverColor};
  }
`

export default StyledLink
