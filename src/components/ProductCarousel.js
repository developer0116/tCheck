import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

export default ({ children }) => (
  <Carousel showArrows={false} showStatus={false} showThumbs={false}>
    {children}
  </Carousel>
)
