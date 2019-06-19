import { useState } from "react"

const ProductFAQDropDown = ({ children }) => {
  const [isOpen, toggleOpen] = useState(false)

  return children(isOpen, toggleOpen)
}

export default ProductFAQDropDown
