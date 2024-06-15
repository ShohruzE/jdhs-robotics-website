import React from 'react'

import hero1 from '../../public/images/hero-1.png'
import hero2 from '../../public/images/hero-2.png'
import hero3 from '../../public/images/hero-3.png'

import Carousel from './ui/Carousel'

const Hero = () => {

  const IMAGES = [hero1, hero2, hero3];

  return (
    <div>
      <Carousel 
        images={IMAGES} 
        autoSlide={true}
        autoSlideInterval={10_000}
      />
    </div>
  )
}

export default Hero