import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

export default ({
  children,
  autoPlay = false,
  interval = 0,
  infiniteLoop = false,
}) => (
  <Carousel
    swipeable={true}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    autoPlay={autoPlay}
    interval={interval}
    infiniteLoop={infiniteLoop}
  >
    {children}
  </Carousel>
)
