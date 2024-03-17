import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
}

const DOTS_SPACING = 25

export const Carousel = ({ children }) => {
  return (
    <div css={{ paddingBottom: DOTS_SPACING }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}

export default Carousel
