import styled from "styled-components"
import { tGreen, Ink, Flour, tGreenSelected } from "../lib/colors"

const Button = styled.button`
  height: ${props => {
    return props.small ? `32px` : props.large ? `48px` : `40px`
  }};
  display: block;
  padding: 0 30px;
  border-radius: 4px;
  color: ${({ secondary }) => (secondary ? Ink : Flour)};
  background-color: ${({ tertiary, secondary }) =>
    secondary ? Flour : tertiary ? "Transparent" : tGreen};
  border: 1px solid ${({ tertiary }) => (tertiary ? Flour : tGreen)};
  font-family: Lato;
  font-size: 14px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.29;
  letter-spacing: normal;
  transition: all 300ms 0s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.4);
  }

  &:active {
    background-color: ${tGreenSelected};
  }
`

export default Button
